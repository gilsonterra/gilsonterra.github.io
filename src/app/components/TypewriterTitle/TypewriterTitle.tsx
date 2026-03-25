import { Special_Elite } from "next/font/google";
import "./styles.css";

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

type TypewriterTitleProps = {
  text: string;
  size?: string;
  color?: string;
  className?: string;
};

const TypewriterTitle: React.FC<TypewriterTitleProps> = ({
  text,
  size = "2rem",
  color = "var(--foreground)",
  className = "",
}) => {
  return (
    <div className={[specialElite.className, "typewriter-title", className].filter(Boolean).join(" ")} style={{ fontSize: size, color }}>
      {text}
    </div>
  );
};

export default TypewriterTitle;
