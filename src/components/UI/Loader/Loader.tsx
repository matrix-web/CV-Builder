import { FC } from "react";
import styled, {css, keyframes} from "styled-components";

interface ILoader {
  size?: "small" | "big";
  color?: string;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

const StyledLoader = styled.div<ILoader>`
  display: flex;
  border: ${({ size }) => size === "small" ? "2px" : "3px"} solid transparent;
  border-top-color: ${({ color }) => `var(--color-${color})`};
  border-bottom-color: ${({ color }) => `var(--color-${color})`};
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;

  ${({ size }) => size === "small" ? css`
    width: 1.2rem;
    height: 1.2rem;
  ` : css`  
    width: 3.5em;
    height: 3.5em;
  `}

  &::before {
    content: "";
    display: block;
    margin auto;
    border: ${({ size }) => size === "small" ? "2px" : "3px"} 
      solid ${({ color }) => `var(--color-${color})`};
    border-radius: 50%;
    animation: ${pulse} 1s alternate ease-in-out infinite;

    ${({ size }) => size === "small" ? css`
      width: 0.5rem;
      height: 0.5rem;
    ` : css`  
      width: 0.75rem;
      height: 0.75rem;
    `}
  }
`;

export const Loader: FC<ILoader> = (props): JSX.Element => {
  const { size = "small", color="blue-400" } = props;

  return (
    <StyledLoader
      size={size}
      color={color}
    />
  )
}