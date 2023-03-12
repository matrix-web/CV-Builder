import styled, { css } from "styled-components";
import { colors } from "@/helpers";

export const StyledDropZone = styled.div<{ isError: boolean, isDragging: boolean, isDisabled: boolean, isSuccess: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 44px 0;
  background: ${({ isDragging, isSuccess, isError }) => isDragging ? colors.gray50 : isSuccess ? colors.success100 : isError ? colors.error100 : colors.white};
  border: 1px dashed ${colors.gray300};
  border-radius: 4px;
  font-family: var(--font-brand);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.005em;
  color: ${colors.black};
  cursor: pointer;
  opacity: all 0.3s ease-in;

  &:hover,
  &:focus {
    border-color: ${colors.secondary400};
  }


  ${({ isDisabled }) => isDisabled && css`
    background-color: ${colors.gray200};
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

export const StyledLabelText = styled.span``;

export const StyledDropZoneWrapper = styled.div``;

export const StyledInputFile = styled.input`
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  z-index: -1;
`;

export const StyledProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledProgress = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${colors.gray200};
`;

export const StyledProgressBar = styled.div<any>`
  height: 100%;
  border-radius: inherit;
  background-color: ${colors.primary500};
  transition: width 0.4s ease;
`;