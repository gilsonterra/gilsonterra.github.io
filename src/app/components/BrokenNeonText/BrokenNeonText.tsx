"use client";

import styled, { keyframes } from "styled-components";

const bgAnimation = keyframes`
  0% {
    opacity: 0.7;
  }
  3% {
    opacity: 0.4;
  }
  5% {
    opacity: 0.7;
  }
  15% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.4;
  }
`;

// Keyframes for Text Animation
const textAnimation = (color: string) => keyframes`
  0% {
    color: white;
    text-shadow: -3px -3px 5px ${color}, 3px -3px 5px ${color}, 3px 3px 5px ${color}, -3px 3px 5px ${color};
  }
  3% {
    color: rgba(255, 255, 255, 0.4);
    text-shadow: none;
  }
  5% {
    color: white;
    text-shadow: -3px -3px 5px ${color}, 3px -3px 5px ${color}, 3px 3px 5px ${color}, -3px 3px 5px ${color};
  }
  15% {
    color: rgba(255, 255, 255, 0.4);
    text-shadow: none;
  }
  100% {
    color: rgba(255, 255, 255, 0.4);
    text-shadow: none;
  }
`;

export const Neon = styled.div<{ color: string }>`
  position: relative;
  display: inline-block;
  z-index: 1;
  color: ${(props) => props.color};
  text-shadow:
    -3px -3px 5px ${(props) => props.color},
    3px -3px 5px ${(props) => props.color},
    3px 3px 5px ${(props) => props.color},
    -3px 3px 5px ${(props) => props.color};

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: scale(2, 8);
    animation: ${bgAnimation} 2s infinite;
    opacity: 0.4;
  }

  span {
    color: rgba(255, 255, 255, 0.4);
    text-shadow: none;
    animation-name: ${(props) => textAnimation(props.color)};
    animation-iteration-count: infinite;
  }

  span:nth-child(1) {
    animation-duration: 2s;
  }

  span:nth-child(2) {
    animation-duration: 5s;
  }

  span:nth-child(3) {
    animation-duration: 300ms;
  }
`;

const BrokenNeonText: React.FC = () => {
  return (
    <Neon color="white" className="text-4xl font-thin tracking-wider ">
      Pág
      <span>in</span>a n<span>ão</span> encon
      <span className="inline-block translate-y-2">t</span>rada
    </Neon>
  );
};

export default BrokenNeonText;
