import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

type FileListResponse = {
  files: string[];
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FileListResponse>,
) {
  const publicDir = path.join(process.cwd(), "public/notas");

  fs.readdir(publicDir, (err, files) => {
    if (err) {
      res.status(500).json({ files: [], error: "Erro ao ler a pasta" });
      return;
    }
    res.status(200).json({ files });
  });
}
