import styled from "styled-components";
import TypewriterTitle from "../TypewriterTitle/TypewriterTitle";

const Container = styled.div`
  line-height: 1.8;
  font-size: 1rem;
  color: var(--foreground);

  h1,
  h2,
  h3 {
    font-weight: 700;
    padding: 1rem 0 0.7rem;
  }

  p {
    margin-bottom: 16px;
    color: var(--text-secondary);
  }

  blockquote {
    border-left: 4px solid var(--accent);
    padding-left: 16px;
    font-style: italic;
    color: var(--text-secondary);
  }

  code {
    background-color: var(--background-muted);
    color: var(--foreground);
    padding: 4px 8px;
    border-radius: 8px;
    font-family: "Courier New", Courier, monospace;
  }

  pre {
    background-color: var(--color-primary-900);
    color: var(--accent-contrast);
    padding: 16px;
    border-radius: 16px;
    white-space: pre-wrap;
    word-wrap: break-word;
    box-shadow: var(--shadow-md);
  }

  ul,
  ol {
    margin-left: 20px;
  }

  li {
    margin-bottom: 8px;
    color: var(--text-secondary);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.5rem auto;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
  }

  a {
    font-weight: 600;
    color: var(--link);
    text-decoration: underline;
    text-underline-offset: 0.35rem;
    text-decoration-style: dotted;
    text-decoration-color: var(--accent);
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
      <TypewriterTitle text={title} size="2rem" />
      <Container dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default MarkdownViewer;
