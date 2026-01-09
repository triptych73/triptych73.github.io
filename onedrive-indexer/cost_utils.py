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
    'gemini-2.0': {'in': 0.00, 'out': 0.00}, # Experimental often free
}

class CostEstimator:
    def __init__(self):
        if "total_cost" not in st.session_state:
            st.session_state["total_cost"] = 0.0
        if "total_tokens_in" not in st.session_state:
            st.session_state["total_tokens_in"] = 0
        if "total_tokens_out" not in st.session_state:
            st.session_state["total_tokens_out"] = 0

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
        total_job_cost = cost_in + cost_out

        st.session_state["total_cost"] += total_job_cost
        st.session_state["total_tokens_in"] += input_tokens
        st.session_state["total_tokens_out"] += output_tokens
        
        return total_job_cost

    def get_total_cost(self):
        return st.session_state["total_cost"]

    def reset(self):
        st.session_state["total_cost"] = 0.0
        st.session_state["total_tokens_in"] = 0
        st.session_state["total_tokens_out"] = 0
