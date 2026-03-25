import styled, { keyframes } from "styled-components";

const spin = keyframes<{ color: string; $time: string }>`
  to { transform: rotate(360deg) }
`;

const Spinner = styled.div<{ size: number }>`
  height: ${(props) => props.size ?? 60}px;
  width: ${(props) => props.size ?? 60}px;
  border: 8px solid var(--accent-softer);
  border-left-color: var(--accent);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default Spinner;
