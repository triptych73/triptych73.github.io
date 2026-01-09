from pypdf import PdfReader
import io

def extract_pdf_text(file_bytes, llm_client=None):
    """
    Extracts text from a PDF. 
    1. Tries standard text extraction.
    2. If text is sparse and llm_client is provided, attempts OCR/Vision on images (if any).
    """
    try:
        pdf_file = io.BytesIO(file_bytes)
        reader = PdfReader(pdf_file)
        text_content = []
        
        for i, page in enumerate(reader.pages):
            text = page.extract_text() or ""
            
            # Heuristic: If page has very little text, it might be a scan.
            # But extracting images from PDF is non-trivial without 'pdf2image' or similar.
            # pypdf can extract images, but it's complex. 
            # For now, we will stick to text-only extraction unless the user specifically 
            # requested the advanced OCR flow which I might have lost.
            # Rearchitecting for robustness:
            
            if len(text.strip()) > 50:
                text_content.append(f"### Page {i+1}")
                text_content.append(text)
            else:
                # Fallback: Check for images if LLM is available
                # Note: pypdf image extraction can be buggy. 
                # Simplest path: If we have bytes, we can try to rely on the fact 
                # that if it's a pure image PDF, we might need OCR.
                # Since we don't have 'pdf2image' installed (it requires poppler),
                # we will just note it.
                
                # RECOVERY: The previous code used 'page.images'. Let's try to trust pypdf's image access.
                if llm_client and hasattr(page, 'images') and len(page.images) > 0:
                     text_content.append(f"### Page {i+1} (Scanned/Image Analysis via {llm_client.model_name})")
                     # page.images returns ImageFile objects
                     for img in page.images:
                         # img.data is the bytes
                         description = llm_client.analyze_image(img.data, prompt="Transcribe the text in this image exactly.")
                         text_content.append(description)
                else:
                    text_content.append(f"### Page {i+1}")
                    text_content.append(text if text.strip() else "[No text or extractable images found]")

        return "\n\n".join(text_content)
    except Exception as e:
        return f"[Error extracting PDF: {str(e)}]"
