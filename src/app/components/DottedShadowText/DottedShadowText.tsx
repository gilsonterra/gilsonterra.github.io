import "./style.css";

type DottedShadowTextProps = {
  text: string;
};

const DottedShadowText: React.FC<DottedShadowTextProps> = ({ text }) => {
  return (
    <span
      className="text-9xl font-sans font-bold dotted-shadow-text"
      data-shadow={text}
    >
      {text}
    </span>
  );
};

export default DottedShadowText;
