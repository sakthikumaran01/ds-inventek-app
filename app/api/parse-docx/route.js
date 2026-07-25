import { NextResponse } from "next/server";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const curriculumDir = path.join(process.cwd(), "docs", "Curriculum");
    const outputFilePath = path.join(process.cwd(), "docs", "extracted_curriculums.md");
    
    if (!fs.existsSync(curriculumDir)) {
      return NextResponse.json({ error: "Curriculum directory not found" }, { status: 404 });
    }

    const files = fs.readdirSync(curriculumDir).filter(f => f.endsWith(".docx"));
    let markdownContent = "# Extracted Course Curriculums\n\nGenerated automatically via API parser.\n\n";

    for (const file of files) {
      const fullPath = path.join(curriculumDir, file);
      
      // Inline python script to unzip and extract text from word/document.xml
      const pythonScript = `
import zipfile
import xml.etree.ElementTree as ET
import sys

try:
    with zipfile.ZipFile(r"${fullPath}") as docx:
        xml_content = docx.read("word/document.xml")
        root = ET.fromstring(xml_content)
        text_runs = []
        for paragraph in root.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p"):
            p_text = []
            for run in paragraph.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t"):
                if run.text:
                    p_text.append(run.text)
            if p_text:
                text_runs.append("".join(p_text))
        print("\\n".join(text_runs))
except Exception as e:
    print("ERROR:", e)
`;
      
      try {
        const stdout = execSync("python -c " + JSON.stringify(pythonScript), { encoding: "utf-8" });
        markdownContent += `## ${file.replace(/_/g, " ").replace(".docx", "")}\n\n`;
        markdownContent += stdout + "\n\n---\n\n";
      } catch (err) {
        markdownContent += `## ${file}\n\nFailed to extract: ${err.message}\n\n---\n\n`;
      }
    }

    fs.writeFileSync(outputFilePath, markdownContent, "utf-8");
    return NextResponse.json({ success: true, message: `Curriculums extracted to docs/extracted_curriculums.md` });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
