import fs from "fs";
import path from "path";

// Caminho da pasta onde os arquivos markdown estão localizados
const notasDir = path.join(process.cwd(), "public", "notas");

// Função para gerar o índice dos arquivos markdown
const generateIndexNotas = (dir) => {
  let results = [];

  // Lê todos os arquivos e diretórios no diretório atual
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Se for um diretório, chama a função recursivamente
    if (stat && stat.isDirectory()) {
      results = results.concat(generateIndexNotas(filePath));
    } else if (file.endsWith(".md")) {
      // Se for um arquivo markdown, adiciona ao resultado
      results.push(filePath.replace(notasDir, "").replace(/\\/g, "/"));
    }
  });

  return results;
};

// Função principal para gerar o arquivo de índice
const generateIndexFile = () => {
  const markdownFiles = generateIndexNotas(notasDir);

  // Criar o conteúdo do arquivo JSON
  const indexContent = JSON.stringify(markdownFiles, null, 2);

  // Caminho do arquivo de índice JSON
  const outputFile = path.join(process.cwd(), "public", "notas/index.json");

  // Gravar o arquivo JSON
  fs.writeFileSync(outputFile, indexContent);

  console.log("Índice gerado com sucesso:", outputFile);
};

// Executa a função para gerar o índice
generateIndexFile();
