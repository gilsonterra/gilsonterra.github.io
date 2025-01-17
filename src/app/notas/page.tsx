"use client";

import { useEffect, useState } from "react";
import DottedShadowText from "../components/DottedShadowText/DottedShadowText";
import { remark } from "remark";
import html from "remark-html";

const NotesPage = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    // Função para buscar os arquivos da API
    async function fetchFiles() {
      const res = await fetch("/api/notas");
      const data = await res.json();
      if (data.files) {
        setFiles(data.files);
      } else {
        console.error("Erro ao carregar os arquivos:", data.error);
      }
    }

    fetchFiles();
  }, []);

  useEffect(() => {
    fetch("/notas/TI/Tech Writer.md")
      .then((response) => response.text())
      .then((text) => {
        remark()
          .use(html)
          .process(text, (err, file) => {
            if (err) {
              console.error("Erro ao processar o Markdown:", err);
            } else {
              // Definir o HTML convertido
              setMarkdownContent(String(file));
            }
          });
      })
      .catch((error) => console.error("Erro ao carregar o arquivo:", error));
  }, []);

  return (
    <div className="flex flex-col p-4 items-center scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      Files
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
      <DottedShadowText text="Notas" />
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
    </div>
  );
};

export default NotesPage;
