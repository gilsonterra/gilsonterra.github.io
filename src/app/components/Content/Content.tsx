import "./styles.css";

type ContentProps = {
  children: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="content-container">{children}</div>;
};

export default Content;
