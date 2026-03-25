import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 1rem;
  background-color: var(--accent);
  color: var(--accent-contrast);
  font-size: 1rem;
  border: 1px solid var(--accent);
  border-radius: 999px;
  cursor: pointer;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
  box-shadow: var(--shadow-sm);

  &:hover {
    background-color: var(--accent-hover);
    border-color: var(--accent-hover);
    transform: translateY(-1px);
  }
`;

export default Button;
