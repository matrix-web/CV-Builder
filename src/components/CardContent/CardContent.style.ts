import styled, { css } from "styled-components";
import { colors } from "@/helpers";

export const StyledCardContent = styled.div<{ isFront?: boolean, isBack?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(233,233,233,.5);
  backface-visibility: hidden;
  padding: 30px 40px;

  ${({ isFront }) => isFront && css`
    z-index: 2;
    transform: rotateX(0deg);
  `}

  ${({ isBack }) => isBack && css`
    transform: rotateX(-180deg);
    color: ${colors.white};
  `}
`;

export const StyledLink = styled.a`
  display: inline-block;
  margin-bottom: 50px;
  font-family: var(--font-Brand);
  font-size: 16px;
  color: ${colors.red400};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 20px solid #CE1D5A;
    border-right: 20px solid transparent;
  }

  &::after {
    content: "";
    position: absolute;
    top: 8px;
    left: 8px;
    width: 0;
    height: 0;
    border-top: 20px solid white;
    border-right: 20px solid transparent;
  }
`;

export const StyledActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledSocialList = styled.ul`
  position: absolute;
  right: 100px;
  top: 30px;
  display: flex;
  gap: 10px;
`;

export const StyledSocialItem = styled.li`
  a svg {
    transition: 0.4s;
  }

  &:hover {
    a svg {
      fill: ${colors.secondary400};
    }
  }
`;