
import styled, { keyframes } from "styled-components";

const spin = keyframes<{ color: string; $time: string }>`
  to { transform: rotate(360deg) }
`;

const Spinner = styled.div<{ size: number }>`
  height: ${(props) => props.size ?? 60}px;
  width: ${(props) => props.size ?? 60}px;
  border: 8px solid rgba(244, 245, 246, .1);
  border-left-color: #9B4DCA;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default Spinner;
