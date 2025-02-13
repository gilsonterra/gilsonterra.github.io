import Link from "next/link";
import { UrlObject } from "url";
import "./styles.css";

type TopicTagProps = {
  text: string;
  href?: string | UrlObject;
};

const TopicTag: React.FC<TopicTagProps> = ({ text, href = "/" }) => {
  return (
    <Link className="topic-tag" href={href}>
      {text}
    </Link>
  );
};

export default TopicTag;
