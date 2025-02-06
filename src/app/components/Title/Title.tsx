import Link from "next/link";

const Title: React.FC = () => {
  return (
    <div
      style={{
        fontSize: "var(--text-xl)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link href="/">
        <span style={{ fontWeight: 100 }}>Gilson</span>
        <span style={{ fontWeight: 600 }}>Terra</span>
      </Link>
    </div>
  );
};

export default Title;
