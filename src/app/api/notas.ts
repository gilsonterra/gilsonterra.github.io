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
      res.status(500).json({ error: "Erro ao ler a pasta" } as any);
      return;
    }
    res.status(200).json({ files });
  });
}
