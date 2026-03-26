import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import styled from "styled-components";
import ProgressBar from "../ProgressBar/ProgressBar";
import Spinner from "../Spinner/Spinner";

const StarButton = styled.button<{ $active?: boolean }>`
  cursor: pointer;
  transition: border 0.2s, box-shadow 0.2s;
  outline: none;

  svg {
    animation: ${({ $active }) => $active ? "pulseGlow 600ms ease-in-out 1" : "none"};
  }

  @keyframes pulseGlow {
    0% {
      transform: scale(1);
      filter: drop-shadow(0 0 0px #f59e0b);
    }
    50% {
      transform: scale(1.2);
      filter: drop-shadow(0 0 12px #f59e0b);
    }
    100% {
      transform: scale(1);
      filter: drop-shadow(0 0 0px #f59e0b);
    }
  }
`;

const TIMEOUT = 3000;

type OptimisticUiSimulatorProps = {
  timeout?: number;
  showLoading?: boolean;
  optimistic?: boolean;
  error?: boolean;
  text: string;
};

const OptimisticUiSimulator: React.FC<OptimisticUiSimulatorProps> = ({
  text,
  error = false,
  timeout = TIMEOUT,
  optimistic = false,
  showLoading = false,
}) => {
  const [active, setActive] = useState(false);
  const [activeOptimistic, setActiveOptimistic] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [messageError, setMessageError] = useState("");

  const color = active ? "#f59e0b" : "#475569";
  const colorOptimistic = activeOptimistic ? "#f59e0b" : "#475569";

  const simulateRequest = async () => {
    setLoading(true);
    setProgress(100);
    setMessageError("");
    setActiveOptimistic((prev) => !prev);

    await new Promise((resolve) => {
      setTimeout(() => {
        setActive((prev) => !prev);
        setProgress(0);

        if (error) {
          setActiveOptimistic((prev) => !prev);
          setActive((prev) => !prev);
          setMessageError("Erro!");
        }

        resolve(null);
      }, timeout);
    });

    setLoading(false);
  };

  const handleClick = async () => {
    await simulateRequest();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div
        style={{
          fontSize: "clamp(1rem, 4vw, var(--text-xl))",
          display: "flex",
          width: "100%",
        }}
      >
        <StarButton
          onClick={handleClick}
          $active={optimistic ? activeOptimistic : active}
          style={{
            width: "100%",
            maxWidth: "100%",
            background: "transparent",
            border: "none",
            color: "inherit",
            padding: 0,
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {showLoading ? (
                loading ? (
                  <Spinner size={45} />
                ) : (
                  <StarIcon color={color} height={50} />
                )
              ) : (
                <StarIcon
                  color={optimistic ? colorOptimistic : color}
                  height={50}
                />
              )}
              <span style={{ overflowWrap: "anywhere" }}>{text}</span>
            </div>
            {progress > 0 && <ProgressBar width={progress} time={`${timeout}ms`} />}
            {messageError && <div style={{ color: "red" }}>{messageError}</div>}
          </div>
        </StarButton>
      </div>
    </div>
  );
};

export default OptimisticUiSimulator;
