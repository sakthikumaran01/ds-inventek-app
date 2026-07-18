import zipfile
import xml.etree.ElementTree as ET
import glob
import os

def read_docx(file_path):
    try:
        with zipfile.ZipFile(file_path) as docx:
            xml_content = docx.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            text_runs = []
            for paragraph in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                p_text = []
                for run in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
                    if run.text:
                        p_text.append(run.text)
                if p_text:
                    text_runs.append("".join(p_text))
            
            return "\n".join(text_runs)
    except Exception as e:
        return f"Error reading {file_path}: {e}"

def main():
    curriculum_dir = os.path.join("docs", "Curriculum")
    output_file = os.path.join("docs", "extracted_curriculums.md")
    
    if not os.path.exists(curriculum_dir):
        print(f"Error: Directory not found: {curriculum_dir}")
        return

    docx_files = glob.glob(os.path.join(curriculum_dir, "*.docx"))
    if not docx_files:
        print(f"No .docx files found in {curriculum_dir}")
        return

    print(f"Found {len(docx_files)} curriculum files. Parsing...")
    
    markdown_content = "# Extracted Course Curriculums\n\n"
    for file_path in docx_files:
        filename = os.path.basename(file_path)
        print(f"Processing: {filename}")
        text = read_docx(file_path)
        markdown_content += f"## {filename.replace('_', ' ').replace('.docx', '')}\n\n"
        markdown_content += text + "\n\n---\n\n"

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(markdown_content)
        
    print(f"Success! Curriculum contents saved to: {output_file}")

if __name__ == "__main__":
    main()
