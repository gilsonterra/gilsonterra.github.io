"use client";

import { useTheme } from "@/app/providers/themeProvider";
import styled, { keyframes } from "styled-components";

const shadAnimation = keyframes` 
0% {
  background-position: 0 0;
}
0% {
  background-position: 100% -100%;
}`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: "red";
  column-gap: 12px;
  row-gap: 3px;
`;

const Text = styled.span<{ shadow?: string; color?: string; size?: string }>`
  display: inline-block;
  line-height: 40px;
  text-shadow: 0.03em 0.03em 0
    ${(props) => props.shadow || "hsl(277, 47%, 31%)"};
  position: relative;
  font-size: ${(props) => props.size || "12rem"};
  color: ${(props) => props.color || "hsl(276.6, 49.0%, 69.2%)"};
  &::after {
    content: attr(data-shadow);
    position: absolute;
    top: 0.06em;
    left: 0.06em;
    z-index: -1;
    text-shadow: none;
    background-image: linear-gradient(
      45deg,
      transparent 45%,
      hsla(48, 20%, 90%, 1) 45%,
      hsla(48, 20%, 90%, 1) 55%,
      transparent 0
    );
    background-size: 0.05em 0.05em;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${shadAnimation} 30s linear infinite;
  }
`;

type DottedShadowTextProps = {
  text: string;
  size?: string;
  color?: string;
  shadow?: string;
  className?: string;
};

const DottedShadowText: React.FC<DottedShadowTextProps> = ({
  text,
  color = "var(--foreground)",
  shadow = "#22272f",
  size = "2rem",
  className,
}) => {
  const { theme } = useTheme();
  const words = text.split(" ");

  return (
    <Container className={className}>
      {words.map((word, index) => (
        <Text
          key={index}
          style={{ fontWeight: "bold" }}
          data-shadow={word}
          size={size}
          color={theme === "light" ? "purple" : color}
          shadow={theme === "light" ? "hsl(277, 47%, 31%)" : shadow}
        >
          {word}
        </Text>
      ))}
    </Container>
  );
};

export default DottedShadowText;
