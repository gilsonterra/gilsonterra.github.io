import { Gloria_Hallelujah } from "next/font/google";
import "./styles.css";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

type NoteTitleProps = {
  children: React.ReactNode;
};

const NoteTitle: React.FC<NoteTitleProps> = ({ children }) => {
  return <strong className={gloriaHallelujah.className + " note-title"}>{children}</strong>;
};

export default NoteTitle;
