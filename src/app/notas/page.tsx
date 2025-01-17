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
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const generateFileName = (path: string) =>
    path?.substring(1).replaceAll(".md", "").replaceAll("/", " -> ");

  const generateTitle = (path: string) =>
    path.substring(path.lastIndexOf("/") + 1).replaceAll(".md", "");

  const getContent = async (path: string) => {
    setSelectedFile(path);

    fetch(path)
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
  };

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

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className="flex flex-col w-full">
      <DottedShadowText text="Notas" />
      <div className="grid grid-cols-[600px,1fr] gap-10 w-full">
        <ul className="text-sm py-4">
          {files?.map((file) => (
            <li key={file} className="py-1">
              <button
                onClick={() => {
                  getContent(`/notas${file}`);
                }}
              >
                {generateFileName(file)}
              </button>
            </li>
          ))}
        </ul>
        <MarkdownViewer
          title={generateTitle(selectedFile || "")}
          content={markdownContent}
        />
      </div>
    </div>
  );
};

export default NotesPage;
