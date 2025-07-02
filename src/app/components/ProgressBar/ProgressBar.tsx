
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
  border-radius: 60px;
	overflow: hidden;
  width: 100%;
  left: 50%;
  max-width: 50%;
  position: absolute;
  top: 50%;
  transform:  translate3d(-50%,-50%,0);
`

const Bar = styled.span`
  background: rgba(244, 245, 246, .1);
  display: block;
`;

const Progress = styled.span<{ width: number, time: string }>`
  animation: ${(props) => loader(props.width)} ${props => props.time} ease forwards;
  background: #9B4DCA;
  color: #fff;
  padding: 10px;
  width: 0;
  display: block;
`;

type ProgressBarProps = {
  width: number;
  time?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ width, time = '1s' }) => {
  return (
    <Container>
      <Bar>
        <Progress width={width} time={time} />
      </Bar>
    </Container>
  );
};

export default ProgressBar;
