import { Gloria_Hallelujah } from "next/font/google";
import "./styles.css";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

type NoteTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const NoteTitle: React.FC<NoteTitleProps> = ({ children, className = "" }) => {
  return <strong className={[gloriaHallelujah.className, "note-title", className].filter(Boolean).join(" ")}>{children}</strong>;
};

export default NoteTitle;
