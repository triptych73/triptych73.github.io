import os
import base64
import io
from cost_utils import CostEstimator

# Lazy imports
try:
    from openai import OpenAI
except ImportError: OpenAI = None

try:
    from anthropic import Anthropic
except ImportError: Anthropic = None

# New Google SDK
try:
    from google import genai
    from google.genai import types
except ImportError:
    genai = None

import time
import random

def retry_with_backoff(func, max_retries=5, initial_delay=2.0, backoff_factor=2.0):
    """
    Retry logic for rate limits (429) and transient errors.
    """
    def wrapper(*args, **kwargs):
        delay = initial_delay
        for i in range(max_retries + 1):
            try:
                return func(*args, **kwargs)
            except Exception as e:
                error_msg = str(e)
                # Check for rate limit indicators in common provider errors
                is_rate_limit = "429" in error_msg or "ResourceExhausted" in error_msg or "RESOURCE_EXHAUSTED" in error_msg or "Quota exceeded" in error_msg
                
                if is_rate_limit and i < max_retries:
                    sleep_time = delay + random.uniform(0, 0.5) # Add jitter
                    print(f"DEBUG: Rate limit hit. Retrying in {sleep_time:.2f}s... (Attempt {i+1}/{max_retries})")
                    time.sleep(sleep_time)
                    delay *= backoff_factor
                else:
                    raise e
    return wrapper

class LLMClient:
    def __init__(self, provider, api_key, model_name, cost_tracker):
        self.provider = provider
        self.api_key = api_key
        self.model_name = model_name
        self.tracker = cost_tracker
        self._genai_client = None

    def _get_genai_client(self):
        if not self._genai_client and genai:
            self._genai_client = genai.Client(api_key=self.api_key)
        return self._genai_client

    def analyze_image(self, image_bytes, prompt="Describe this image in detail and transcribe any text."):
        if not self.api_key:
            return "[Error: Missing API Key]"

        try:
            if self.provider == "OpenAI":
                return self._call_openai(image_bytes, prompt)
            elif self.provider == "Anthropic":
                return self._call_anthropic(image_bytes, prompt)
            elif self.provider == "Google":
                return self._call_google_v2(image_bytes, prompt)
            else:
                return "[Error: Unknown Provider]"
        except Exception as e:
            return f"[Error calling {self.provider}: {str(e)}]"

    def _call_openai(self, image_bytes, prompt):
        if OpenAI is None: return "[Error: OpenAI lib missing]"
        client = OpenAI(api_key=self.api_key)
        base64_image = base64.b64encode(image_bytes).decode('utf-8')
        
        response = client.chat.completions.create(
            model=self.model_name,
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": prompt},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{base64_image}"
                            }
                        }
                    ]
                }
            ],
            max_tokens=2000
        )
        content = response.choices[0].message.content
        if response.usage:
            self.tracker.track(self.model_name, response.usage.prompt_tokens, response.usage.completion_tokens)
        return content

    def _call_anthropic(self, image_bytes, prompt):
        if Anthropic is None: return "[Error: Anthropic lib missing]"
        client = Anthropic(api_key=self.api_key)
        base64_image = base64.b64encode(image_bytes).decode('utf-8')
        
        message = client.messages.create(
            model=self.model_name,
            max_tokens=2000,
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "image",
                            "source": {
                                "type": "base64",
                                "media_type": "image/jpeg",
                                "data": base64_image
                            }
                        },
                        {
                            "type": "text",
                            "text": prompt
                        }
                    ]
                }
            ]
        )
        if message.usage:
            self.tracker.track(self.model_name, message.usage.input_tokens, message.usage.output_tokens)
        return message.content[0].text

    # @retry_with_backoff  <-- REVERTED per user request
    def _call_google_v2(self, image_bytes, prompt):
        if genai is None: return "[Error: google-genai lib missing]"
        client = self._get_genai_client()
        
        # New API Call style
        response = client.models.generate_content(
            model=self.model_name,
            contents=[
                types.Content(
                    parts=[
                        types.Part.from_bytes(
                            data=image_bytes,
                            mime_type="image/jpeg" 
                        ),
                        types.Part.from_text(text=prompt)
                    ]
                )
            ]
        )
        
        # Tracking - Google GenAI objects might differ slightly in structure
        # Attempt to read usage metadata if available
        in_tokens = 0
        out_tokens = 0
        if hasattr(response, 'usage_metadata'):
             in_tokens = response.usage_metadata.prompt_token_count
             out_tokens = response.usage_metadata.candidates_token_count
        else:
            # Fallback
            in_tokens = 1000
            out_tokens = len(response.text) // 4
            
        self.tracker.track(self.model_name, in_tokens, out_tokens)
        return response.text

    def analyze_text(self, text_content, prompt):
        """
        Analyzes text content using the configured LLM provider.
        """
        if not self.api_key:
            return "[Error: Missing API Key]"

        # Truncate text if too long (simple safety check, 100k chars ~ 25k tokens)
        if len(text_content) > 100000:
             text_content = text_content[:100000] + "\n...[TRUNCATED]..."

        combined_prompt = f"{prompt}\n\nContent to Analyze:\n{text_content}"

        try:
            if self.provider == "OpenAI":
                return self._call_openai_text(combined_prompt)
            elif self.provider == "Anthropic":
                return self._call_anthropic_text(combined_prompt)
            elif self.provider == "Google":
                return self._call_google_text(combined_prompt)
            else:
                return "[Error: Unknown Provider]"
        except Exception as e:
            return f"[Error calling {self.provider}: {str(e)}]"

    def _call_openai_text(self, prompt):
        if OpenAI is None: return "[Error: OpenAI lib missing]"
        client = OpenAI(api_key=self.api_key)
        
        response = client.chat.completions.create(
            model=self.model_name,
            messages=[
                {"role": "user", "content": prompt}
            ],
            max_tokens=2000
        )
        content = response.choices[0].message.content
        if response.usage:
            self.tracker.track(self.model_name, response.usage.prompt_tokens, response.usage.completion_tokens)
        return content

    def _call_anthropic_text(self, prompt):
        if Anthropic is None: return "[Error: Anthropic lib missing]"
        client = Anthropic(api_key=self.api_key)
        
        message = client.messages.create(
            model=self.model_name,
            max_tokens=2000,
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        if message.usage:
            self.tracker.track(self.model_name, message.usage.input_tokens, message.usage.output_tokens)
        return message.content[0].text

    # @retry_with_backoff <-- REVERTED
    def _call_google_text(self, prompt):
        if genai is None: return "[Error: google-genai lib missing]"
        client = self._get_genai_client()
        
        response = client.models.generate_content(
            model=self.model_name,
            contents=prompt 
        )
        
        in_tokens = 0
        out_tokens = 0
        if hasattr(response, 'usage_metadata'):
             in_tokens = response.usage_metadata.prompt_token_count
             out_tokens = response.usage_metadata.candidates_token_count
        else:
            in_tokens = len(prompt) // 4
            out_tokens = len(response.text) // 4
            
        self.tracker.track(self.model_name, in_tokens, out_tokens)
        return response.text

    def analyze_document_visuals(self, image_list, prompt):
        """
        Analyzes a list of images (visual pages of a doc) as one context.
        image_list: list of bytes (JPEG/PNG)
        """
        if not self.api_key:
            return "[Error: Missing API Key]"
            
        try:
            if self.provider == "Google":
                return self._call_google_multi_image(image_list, prompt)
            elif self.provider == "OpenAI":
                return self._call_openai_multi_image(image_list, prompt)
            elif self.provider == "Anthropic":
                return self._call_anthropic_multi_image(image_list, prompt)
            else:
                return "[Error: Provider does not support multi-image analysis]"
        except Exception as e:
            return f"[Error calling {self.provider} for visual doc: {str(e)}]"

    # @retry_with_backoff <-- REVERTED
    def _call_google_multi_image(self, image_list, prompt):
        if genai is None: return "[Error: google-genai lib missing]"
        client = self._get_genai_client()
        
        # Google GenAI supports mixing text and images in 'contents'
        content_parts = []
        for img_bytes in image_list:
            content_parts.append(types.Part.from_bytes(data=img_bytes, mime_type="image/jpeg"))
        
        content_parts.append(types.Part.from_text(text=prompt))
        
        response = client.models.generate_content(
            model=self.model_name,
            contents=[types.Content(parts=content_parts)]
        )
        
        # Usage tracking
        in_tokens = 0
        out_tokens = 0
        if hasattr(response, 'usage_metadata'):
             in_tokens = response.usage_metadata.prompt_token_count
             out_tokens = response.usage_metadata.candidates_token_count
        else:
             in_tokens = len(image_list) * 258 + len(prompt) # Approximation
             out_tokens = len(response.text) // 4
             
        self.tracker.track(self.model_name, in_tokens, out_tokens)
        return response.text

    def _call_openai_multi_image(self, image_list, prompt):
        if OpenAI is None: return "[Error: OpenAI lib missing]"
        client = OpenAI(api_key=self.api_key)
        
        content_list = [{"type": "text", "text": prompt}]
        for img_bytes in image_list:
            b64 = base64.b64encode(img_bytes).decode('utf-8')
            content_list.append({
                "type": "image_url",
                "image_url": {"url": f"data:image/jpeg;base64,{b64}"}
            })
            
        response = client.chat.completions.create(
            model=self.model_name,
            messages=[{"role": "user", "content": content_list}],
            max_tokens=2000
        )
        content = response.choices[0].message.content
        if response.usage:
            self.tracker.track(self.model_name, response.usage.prompt_tokens, response.usage.completion_tokens)
        return content

    def _call_anthropic_multi_image(self, image_list, prompt):
        if Anthropic is None: return "[Error: Anthropic lib missing]"
        client = Anthropic(api_key=self.api_key)
        
        content_list = []
        for img_bytes in image_list:
            b64 = base64.b64encode(img_bytes).decode('utf-8')
            content_list.append({
                "type": "image",
                "source": {
                    "type": "base64",
                    "media_type": "image/jpeg",
                    "data": b64
                }
            })
        content_list.append({"type": "text", "text": prompt})

        message = client.messages.create(
            model=self.model_name,
            max_tokens=2000,
            messages=[{"role": "user", "content": content_list}]
        )
        if message.usage:
            self.tracker.track(self.model_name, message.usage.input_tokens, message.usage.output_tokens)
        return message.content[0].text
