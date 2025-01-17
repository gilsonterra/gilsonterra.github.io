import styled from "styled-components";
import DottedShadowText from "../DottedShadowText/DottedShadowText";

const Container = styled.div`
  line-height: 1.6;
  font-size: 1rem;

  h1,
  h2,
  h3 {
    font-weight: bold;
    padding: 0.5rem 0;
  }

  p {
    margin-bottom: 16px;
  }

  blockquote {
    border-left: 4px solid white;
    padding-left: 16px;
    font-style: italic;
    color: #555;
  }

  code {
    background-color: #f4f4f4;
    padding: 4px 8px;
    font-family: "Courier New", Courier, monospace;
  }

  pre {
    background-color: #2e2e2e;
    color: #f4f4f4;
    padding: 16px;
    border-radius: 8px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  ul,
  ol {
    margin-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  a {
    font-weight: lighter;
    color: #eee;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-color: #eee;
    position: relative;
  }
`;

type MarkdownViewerProps = {
  title: string;
  content: string;
};

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col">
      <DottedShadowText text={title} size="2rem" />
      <Container dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default MarkdownViewer;
