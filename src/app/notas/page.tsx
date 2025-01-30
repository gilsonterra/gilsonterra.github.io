import Link from "next/link";
import { getContentFiles, getFileName } from "../utils/content";

const NotesPages: React.FC = async () => {
  const filenames = getContentFiles();

  return (
    <div>
      Notes
      <ul>
        {filenames.map((filename) => (
          <li key={filename}>
            <Link href={`/notas/${filename.replace(/\.mdx$/, "")}`}>
              {getFileName(filename)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPages;
