import streamlit as st

# Pricing (approximate $/1M tokens as of late 2024/2025)
PRICING = {
    # OpenAI
    'gpt-4o': {'in': 2.50, 'out': 10.00},
    'gpt-4o-mini': {'in': 0.15, 'out': 0.60},
    'gpt-4-turbo': {'in': 10.00, 'out': 30.00},
    'o1-preview': {'in': 15.00, 'out': 60.00},
    'o1-mini': {'in': 3.00, 'out': 12.00},
    # Anthropic
    'claude-3-5-sonnet': {'in': 3.00, 'out': 15.00},
    'claude-3-5-haiku': {'in': 0.80, 'out': 4.00}, # Approx
    'claude-3-opus': {'in': 15.00, 'out': 75.00},
    'claude-3-haiku': {'in': 0.25, 'out': 1.25},
    # Google (Gemini pricing is complex/free tier, using approx commercial rates)
    'gemini-1.5-pro': {'in': 3.50, 'out': 10.50},
    'gemini-1.5-flash': {'in': 0.075, 'out': 0.30},
    'gemini-2.0': {'in': 0.00, 'out': 0.00}, 
    'gemini-3-flash-preview': {'in': 0.075, 'out': 0.30},
    'gemini-3-pro-preview': {'in': 3.50, 'out': 10.50},
    'gemini-3-deep-think': {'in': 5.00, 'out': 15.00}, # estimate
}

import datetime
import db_client

class CostEstimator:
    def __init__(self):
        self._local_cost = 0.0
        self._local_tokens_in = 0
        self._local_tokens_out = 0
        self.day_key = self._get_current_day_key()
        
        # Try to init session state if available
        try:
            # Check if we need to load persistent daily total
            # We do this once per session init effectively
            if "total_cost" not in st.session_state:
                # Load from DB
                saved_cost = db_client.get_daily_cost(self.day_key)
                st.session_state["total_cost"] = saved_cost
                
            if "total_tokens_in" not in st.session_state:
                st.session_state["total_tokens_in"] = 0
            if "total_tokens_out" not in st.session_state:
                st.session_state["total_tokens_out"] = 0
                
            # Double check: If the day key has changed since last session use (in memory), reset?
            # Session State persists as long as tab is open. 
            # If user leaves tab open overnight, we might need to reset.
            # Only way is to check stored date vs current date.
            if "cost_day_key" not in st.session_state:
                 st.session_state["cost_day_key"] = self.day_key
            
            if st.session_state["cost_day_key"] != self.day_key:
                 # It's a new "5AM" day. Reset view.
                 st.session_state["total_cost"] = 0.0
                 st.session_state["cost_day_key"] = self.day_key
                 
        except Exception:
            # We are likely in a background thread
            pass

    def _get_current_day_key(self):
        """
        Returns a string key for the current logical day.
        Day starts at 05:00 GMT.
        """
        now = datetime.datetime.now(datetime.timezone.utc)
        
        # If before 5AM, belong to previous day
        if now.hour < 5:
            now = now - datetime.timedelta(days=1)
            
        return now.strftime("%Y-%m-%d")

    def track(self, model_name, input_tokens, output_tokens):
        # Normalize model name match
        price_key = None
        for key in PRICING.keys():
            if key in model_name.lower():
                price_key = key
                break
        
        if not price_key:
            # Fallback (assume cheap)
            price_key = 'gpt-4o-mini'

        rates = PRICING[price_key]
        cost_in = (input_tokens / 1_000_000) * rates['in']
        cost_out = (output_tokens / 1_000_000) * rates['out']
        
        # USER REQUEST: X10 Multiplier (Safety buffer / Service Fee)
        raw_cost = cost_in + cost_out
        total_job_cost = raw_cost * 10.0

        # Update Local (Thread) stats
        self._local_cost += total_job_cost
        self._local_tokens_in += input_tokens
        self._local_tokens_out += output_tokens

        # Persist to DB (Atomic Increment)
        try:
             db_client.add_daily_cost(self.day_key, total_job_cost)
        except Exception as e:
             print(f"Failed to persist cost: {e}")

        # Try to Update Session State
        try:
            st.session_state["total_cost"] += total_job_cost
            st.session_state["total_tokens_in"] += input_tokens
            st.session_state["total_tokens_out"] += output_tokens
        except Exception:
            pass # Ignore sync error in background thread
        
        return total_job_cost

    def get_total_cost(self):
        try:
            return st.session_state["total_cost"]
        except Exception:
            return self._local_cost

    def reset(self):
        self._local_cost = 0.0
        try:
            # We don't reset DB here, only local session if requested manually
            st.session_state["total_cost"] = 0.0
            st.session_state["total_tokens_in"] = 0
            st.session_state["total_tokens_out"] = 0
        except Exception:
            pass
