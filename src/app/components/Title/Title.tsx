import Link from "next/link";

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
      <Link href="/" style={{ display: "inline-flex", alignItems: "baseline", gap: "0.1em" }}>
        <span style={{ fontWeight: 300 }}>Gilson</span>
        <span style={{ fontWeight: 700 }}>Terra</span>
      </Link>
    </div>
  );
};

export default Title;
