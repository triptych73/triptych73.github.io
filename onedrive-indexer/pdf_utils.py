from pypdf import PdfReader
import io
import sys

# Try to import pdf2image for Vision-First approach
try:
    from pdf2image import convert_from_bytes
    PDF2IMAGE_AVAILABLE = True
except ImportError:
    PDF2IMAGE_AVAILABLE = False

def extract_pdf_text(file_bytes, llm_client=None, prompt=None):
    """
    Extracts content from a PDF.
    
    1. Vision-First (Preferred): If LLM is present and poppler is installed, 
       convert pages to images and let AI read them (preserves layout/charts).
    2. Text Fallback: If no LLM or no poppler, use pypdf to extract raw text.
    """
    
    # --- STRATEGY 1: VISION-FIRST (AI + Poppler) ---
    # --- STRATEGY 1: VISION-FIRST (AI) ---
    if llm_client:
        # A. Try Native PDF Support (Google Gemini)
        # This avoids needing 'poppler' installed locally
        print("DEBUG: Attempting Native PDF Analysis (Gemini)...")
        native_result = llm_client.analyze_document_pdf(
            file_bytes, 
            prompt=prompt if prompt else "Analyze this whole document. Summarize it and transcribe key text."
        )
        
        if native_result:
            return f"### AI Analysis (Source: PDF Native)\n{native_result}"
            
        # B. Fallback to Image Conversion (OpenAI/Anthropic or if Google Native fails? native usually returns string or error string)
        # Only proceed if we have PDF2IMAGE
        if PDF2IMAGE_AVAILABLE:
            try:
                # Convert PDF to images
                # limits: Analyzed first 5 pages to save cost/time if large? 
                # For now, let's try all but maybe limit resolution?
                # 200 dpi is good enough for reading.
                images = convert_from_bytes(file_bytes, dpi=200, fmt='jpeg')
                
                # Convert images to bytes for LLM
                image_bytes_list = []
                for img in images:
                    img_byte_arr = io.BytesIO()
                    img.save(img_byte_arr, format='JPEG')
                    image_bytes_list.append(img_byte_arr.getvalue())
                
                # Send to LLM
                # We treat the whole PDF as one multi-modal document context
                print(f"DEBUG: Vision-First PDF analysis on {len(images)} pages...")
            
                vision_analysis = llm_client.analyze_document_visuals(
                    image_bytes_list, 
                    prompt=prompt if prompt else "Analyze this document."
                )
                
                return f"### AI Vision Analysis (Source: PDF)\n{vision_analysis}"
                
            except Exception as e:
                # If poppler is missing (e.g. local windows), this will fail.
                # Fallback seamlessly.
                print(f"DEBUG: PDF Vision failed (likely missing poppler): {e}. Falling back to text.")

    # --- STRATEGY 2: TEXT FALLBACK (pypdf) ---
    try:
        pdf_file = io.BytesIO(file_bytes)
        reader = PdfReader(pdf_file)
        text_content = []
        
        for i, page in enumerate(reader.pages):
            text = page.extract_text() or ""
            text_content.append(f"### Page {i+1}")
            text_content.append(text if text.strip() else "[No extractable text]")

        return "\n\n".join(text_content)
    except Exception as e:
        return f"[Error extracting PDF: {str(e)}]"
