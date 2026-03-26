import styled, { keyframes } from "styled-components";

const loader = (width: number) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width}%;
  }
`;

const Container = styled.div`
  border-radius: 999px;
  overflow: hidden;
  width: 100%;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
`;

const Bar = styled.span`
  background: var(--background-muted);
  display: block;
`;

const Progress = styled.span<{ width: number; time: string }>`
  animation: ${(props) => loader(props.width)} ${(props) => props.time} ease forwards;
  background: linear-gradient(90deg, var(--accent), var(--accent-hover));
  color: var(--accent-contrast);
  padding: 10px;
  width: 0;
  display: block;
`;

type ProgressBarProps = {
  width: number;
  time?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ width, time = "1s" }) => {
  return (
    <div style={{ width: "min(100%, 400px)" }}>
      <Container>
        <Bar>
          <Progress width={width} time={time} />
        </Bar>
      </Container>
    </div>
  );
};

export default ProgressBar;
