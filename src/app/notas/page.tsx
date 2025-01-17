"use client";

import { useEffect, useState } from "react";
import DottedShadowText from "../components/DottedShadowText/DottedShadowText";
import { remark } from "remark";
import html from "remark-html";
import MarkdownViewer from "../components/MarkdownViewer/MarkdownViewer";

const NotesPage = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [files, setFiles] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/notas/index.json");
        if (!response.ok)
          throw new Error("Erro ao carregar a lista de arquivos");
        const fileList = await response.json();
        setFiles(fileList);
      } catch (err: { message: string }) {
        setError(err?.message || "Erro desconhecido");
      }
    };

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

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className="flex flex-col p-4 items-center scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      Files
      <ul>
        {files.map((file) => (
          <li key={file}>
            <a
              href={`/notas/${file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file}
            </a>
          </li>
        ))}
      </ul>
      <DottedShadowText text="Notas" />
      <MarkdownViewer title="Tech Writer" content={markdownContent} />
    </div>
  );
};

export default NotesPage;
