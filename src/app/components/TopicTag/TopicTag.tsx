type TopicTagProps = {
  text: string;
};

const TopicTag: React.FC<TopicTagProps> = ({ text }) => {
  return (
    <span
      style={{
        fontSize: "var(--text-xs)",
        backgroundColor: "purple",
        color: "var(--foreground)",
        padding: "5px",
        lineHeight: "1",
        borderRadius: "5px",
      }}
      className="topic"
    >
      {text}
    </span>
  );
};

export default TopicTag;
