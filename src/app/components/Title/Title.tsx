import { Gloria_Hallelujah, Orbitron } from "next/font/google";
import Link from "next/link";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const Title: React.FC = () => {
  return (
    <div
      style={{
        fontSize: "clamp(2.15rem, 4vw, 3.25rem)",
        display: "flex",
        alignItems: "center",
        lineHeight: 0.88,
        letterSpacing: "-0.075em",
      }}
    >
      <Link href="/" style={{ display: "inline-flex", alignItems: "baseline" }}>
        <span
          className={gloriaHallelujah.className}
          style={{
            fontWeight: 400,
            letterSpacing: "0.01em",
            transform: "rotate(-1.4deg)",
            display: "inline-block",
          }}
        >
          Gilson
        </span>
        <span
          className={orbitron.className}
          style={{
            fontWeight: 400,
          }}
        >
          Terra
        </span>
      </Link>
    </div>
  );
};

export default Title;
