import Link from "next/link";

const Title: React.FC = () => {
  return (
    <Link
      className="text-3xl text-white font-patrick-hand -rotate-6 hover:rotate-0 transition-transform duration-700 ease-in-out"
      href="/"
    >
      <div className="flex">
        <span className="font-light">Gilson</span>
        <span className="font-extrabold">Terra</span>
      </div>
    </Link>
  );
};

export default Title;
