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

# Fallback Legacy Google SDK (if user picks old model or mix not supported? 
# We'll stick to new SDK for 'Google' provider as requested)

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
