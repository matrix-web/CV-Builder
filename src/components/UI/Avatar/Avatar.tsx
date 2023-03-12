import { FC } from "react";
import styled, { css } from "styled-components";
import { AvatarVariants } from "@/helpers/interfaces";

interface IAvatar {
  img: {
    src: string,
    alt: string;
  },
  variant?: AvatarVariants;
  isClickable?: boolean;
  onClick?: () => void;
}

interface IStyledAvatar {
  variant: AvatarVariants;
}

const StyledAvatar = styled.div<IStyledAvatar>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-sky-100);
  border-radius: 50%;
  overflow: hidden;
  font-style: var(--font-brand);
  border: 2px solid var(--color-white);
  font-weight: 500;

  ${({ variant }) => variant === "xsmall" && css`
    width: 24px;
    height: 24px;
    font-size: 12px;
    line-height: 20px;
  `}

  ${({ variant }) => variant === "small" && css`
    width: 32px;
    height: 32px;
    font-size: 14px;
    line-height: 20px;
  `}

  ${({ variant }) => variant === "small" && css`
    width: 32px;
    height: 32px;
    font-size: 14px;
    line-height: 20px;
  `}

  ${({ variant }) => variant === "medium" && css`
    width: 40px;
    height: 40px;
    font-size: 16px;
    line-height: 24px;
  `}

  ${({ variant }) => variant === "large" && css`
    width: 48px;
    height: 48px;
    font-size: 18px;
    line-height: 28px;
  `}

  ${({ variant }) => variant === "xlarge" && css`
    width: 56px;
    height: 56px;
    font-size: 20px;
    line-height: 28px;
  `}

  ${({ variant }) => variant === "xxlarge" && css`
    width: 64px;
    height: 64px;
    font-size: 24px;
    line-height: 32px;
  `}

  ${({ variant }) => variant === "huge" && css`
    width: 96px;
    height: 96px;
    font-size: 36px;
    line-height: 44px;
  `}

  ${({ variant }) => variant === "xhuge" && css`
    width: 128px;
    height: 128px;
    font-size: 52px;
    line-height: 56px;
  `}
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Avatar: FC<IAvatar> = (props): JSX.Element => {
  const {
    img,
    variant = AvatarVariants.SMALL,
    isClickable,
    onClick
  } = props;

  return (
    <StyledAvatar
      variant={variant}
      onClick={() => isClickable && onClick ? onClick : null}
    >
      <StyledImg src={img.src} alt={img.alt} />
    </StyledAvatar>
  );
}