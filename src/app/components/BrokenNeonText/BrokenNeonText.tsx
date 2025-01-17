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

const textAnimation = (color: string) => keyframes`
  0% {
    color: ${color};
    text-shadow: -3px -3px 5px ${color}, 3px -3px 5px ${color}, 3px 3px 5px ${color}, -3px 3px 5px ${color};
  }
  3% {
    color: rgba(255, 255, 255, 0.4);
    text-shadow: none;
  }
  5% {
    color: ${color};
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

const brokenLetterAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(10px) rotate(2deg);
  }
  100% {
    transform: translateY(10px) rotate(10deg);
    text-shadow: none;
  }
`;

const BrokenLetter = styled.span`
  display: inline-block;
  margin: 0 0.1em;
  animation: ${brokenLetterAnimation} 300ms ease-out 1;
  animation-delay: 3s;
  animation-fill-mode: forwards; // Mantem a posição final
`;

const BlinkLetter = styled.span<{ color: string; time: string }>`
  color: white;
  text-shadow: none;
  text-shadow:
    -3px -3px 5px ${(props) => props.color},
    3px -3px 5px ${(props) => props.color},
    3px 3px 5px ${(props) => props.color},
    -3px 3px 5px ${(props) => props.color};
  animation-name: ${(props) => textAnimation(props.color)};
  animation-duration: ${(props) => props.time};
  animation-iteration-count: infinite;
  animation-delay: 3.5s;
`;

const Neon = styled.div<{ color: string }>`
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
`;

const BrokenNeonText: React.FC = () => {
  return (
    <Neon color="white" className="text-4xl font-thin tracking-wider">
      Pág
      <BlinkLetter color="white" time="1s">
        in
      </BlinkLetter>
      a não{" "}
      <BlinkLetter color="white" time="5s">
        enc
      </BlinkLetter>
      on
      <BrokenLetter>t</BrokenLetter>
      rada
    </Neon>
  );
};

export default BrokenNeonText;
