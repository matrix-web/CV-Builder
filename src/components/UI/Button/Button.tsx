import { forwardRef, ReactNode, MouseEvent, useEffect } from "react";
import styled, { css, CSSProperties } from "styled-components";
import { Loader } from "@/components/UI/Loader/Loader";
import { ButtonVariants, Weight } from "@/helpers/interfaces";

interface IButton {
  isBlock?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  weight?: Weight;
  tag?: "button" | "a";
  href?: string;
  isOutline?: boolean;
  isLink?: boolean;
  variant?: ButtonVariants;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface IStyledButton {
  isBlock: boolean;
  weight: Weight;
  variant: ButtonVariants;
  isOutline: boolean;
  isLink: boolean;
}

interface ITheme {
  [key: string]: {[key: string]: string};
}

const theme: ITheme = {
  primary: {
    backgroundColor: "var(--color-primary-400)",
    borderColor: "var(--color-primary-400)",
    color: "var(--color-white)",

    // hover
    backgroundHover: "var(--color-primary-300)",
    borderHover: "var(--color-primary-300)",
    
    // active
    backgroundActive: "var(--color-primary-500)",
    borderActive: "var(--color-primary-500)"
  },
  secondary: {
    backgroundColor: "var(--color-secondary-400)",
    borderColor: "var(--color-secondary-400)",
    color: "var(--color-white)",

    // hover
    backgroundHover: "var(--color-secondary-300)",
    borderHover: "var(--color-secondary-300)",
    
    // active
    backgroundActive: "var(--color-secondary-500)",
    borderActive: "var(--color-secondary-500)"
  },
  success: {
    backgroundColor: "var(--color-success-400)",
    borderColor: "var(--color-success-400)",
    color: "var(--color-white)",

    // hover
    backgroundHover: "var(--color-success-300)",
    borderHover: "var(--color-success-300)",
    
    // active
    backgroundActive: "var(--color-success-500)",
    borderActive: "var(--color-success-500)"
  },
  warning: {
    backgroundColor: "var(--color-warning-400)",
    borderColor: "var(--color-warning-400)",
    color: "var(--color-white)",

    // hover
    backgroundHover: "var(--color-warning-300)",
    borderHover: "var(--color-warning-300)",
    
    // active
    backgroundActive: "var(--color-warning-500)",
    borderActive: "var(--color-warning-500)"
  },
  danger: {
    backgroundColor: "var(--color-error-600)",
    borderColor: "var(--color-error-600)",
    color: "var(--color-white)",

    // hover
    backgroundHover: "var(--color-error-500)",
    borderHover: "var(--color-error-500)",
    
    // active
    backgroundActive: "var(--color-error-700)",
    borderActive: "var(--color-error-700)"
  },
  disabled: {
    backgroundColor: "var(--color-gray-300)",
    borderColor: "var(--color-gray-300)",
    color: "var(--color-black-alpha-700)"
  }
}

const StyledButton = styled.button<IStyledButton>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-brand);
  font-style: normal;
  font-weight: ${({ weight }) => weight};
  padding: ${({ isLink }) => !isLink ? "5px 20px" : "0px"};
  font-size: 16px;
  line-height: 24px;
  color: ${({ variant, isLink }) => !isLink ? theme[variant].color : theme[variant].backgroundColor};
  transition: 0.4s ease-in;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: ${({ isLink }) => isLink ? "underline" : "none"};

  ${({ isBlock }) => isBlock && css`
    display: flex;
    width: 100%;
  `};

  background-color: ${({ variant, isOutline, isLink }) => 
    (!isOutline && !isLink) && theme[variant].backgroundColor};
    
  border: 1px solid ${({ variant, isOutline, isLink }) => 
    !isLink && isOutline ? theme[variant].borderColor : "transparent"};

  &:not(:disabled):hover {
    ${({ isLink, variant }) => isLink ? css`
      text-decoration: none;
    ` : css`
      background-color: ${theme[variant].backgroundHover};
      border-color: ${theme[variant].borderHover};
    `}
  }

  &:not(:disabled):active {
    ${({ isLink, variant }) => isLink ? css`
      text-decoration: none;
    ` : css`
      background-color: ${theme[variant].backgroundActive};
      border-color: ${theme[variant].borderActive};
    `}
  }

  ${( isLink ) => !isLink && css`
    &:disabled {
      cursor: not-allowed;
      background-color: ${theme["disabled"].backgroundColor};
      border-color: ${theme["disabled"].borderColor};
      color: ${theme["disabled"].color};
    }
  `}
`;

export const Button = forwardRef<IButton, any>((props, ref): JSX.Element => {
  const { 
    tag,
    children,
    isLoading = false,
    isBlock = false,
    isDisabled = false,
    isOutline = false,
    isLink = false,
    href,
    weight = 500,
    variant = ButtonVariants.PRIMARY,
    className,
    style,
    onClick
  } = props;

  const as = tag || (href ? "a" : "button");

  return (
    <StyledButton
      as={as}
      href={href}
      ref={ref}
      isBlock={isBlock}
      disabled={isDisabled}
      className={className}
      style={style}
      isOutline={isOutline}
      isLink={isLink}
      variant={variant}
      weight={weight}
      onClick={(e: MouseEvent<HTMLButtonElement>) => onClick && onClick(e)}
    >
      {!isLoading ? 
        children : 
        <Loader />
      }
    </StyledButton>
  )
})