import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import styled from "styled-components";
import ProgressBar from "../ProgressBar/ProgressBar";
import Spinner from "../Spinner/Spinner";

const StarButton = styled.button`
  cursor: pointer;
  transition: border 0.2s, box-shadow 0.2s;
  outline: none;
`
const TIMEOUT = 5000;

type OptimisticUiSimulatorProps = {
  timeout?: number;
  showLoading?: boolean;
  optimistic?: boolean;
  error?: boolean;
  text: string;
}

const OptimisticUiSimulator: React.FC<OptimisticUiSimulatorProps> = ({ text, error = false, timeout = TIMEOUT, optimistic = false, showLoading = false }) => {
  const [active, setActive] = useState(false);
  const [activeOptimistic, setActiveOptimistic] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [messageError, setMessageError] = useState("");

  const color = active ? "yellow" : "white";
  const colorOptimistic = activeOptimistic ? "yellow" : "white";

  const simulateRequest = async () => {
    setLoading(true);
    setProgress(100);
    setMessageError("");
    setActiveOptimistic((prev) => !prev)

    await new Promise((resolve) => {
      setTimeout(() => {
        setActive(prev => !prev);
        setProgress(0);

        if (error) {
          setActiveOptimistic((prev) => !prev);
          setActive(prev => !prev);
          setMessageError("Erro!");
        }
        resolve(null);
      }, timeout);
    });

    setLoading(false);
  };


  const handleClick = async () => {
    await simulateRequest();
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          fontSize: "var(--text-xl)",
          display: "flex",
          alignItems: "center",
          gap: "50px",
          position: 'relative'
        }}
      >
        <StarButton onClick={handleClick}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {showLoading
              ? (loading ? <Spinner size={45} /> : <StarIcon color={color} height={50} />)
              : <StarIcon color={optimistic ? colorOptimistic : color} height={50} />
            }
            {text}
            {progress > 0 &&
              (<div style={{ display: 'flex' }}>
                <ProgressBar width={progress} time={`${TIMEOUT}ms`} />
              </div>)
            }
            {messageError && <div style={{ color: 'red' }}>{messageError}</div>}
          </div>
        </StarButton>


      </div>
    </div>
  );
};

export default OptimisticUiSimulator;
