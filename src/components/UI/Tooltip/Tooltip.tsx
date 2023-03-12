import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { Button, Icon } from "@/components/UI";
import { usePopperTooltip, Config } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

interface ITooltipProps extends Config {
  children: ReactNode | ReactNode[];
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  className?: string;
}

interface ITrigger {
  right: number;
  bottom: number;
  left: number;
  top: number;
}

const StyledTooltip = styled.div``;

const StyledTooltipArrow = styled.div``;

const StyledTooltipContent = styled.div``;

const StyledTrigger = styled(Button)<ITrigger>`
  position: absolute;
  top: ${({ top }) => top ? top : 0};

  ${({ left }) => left && css`
    left: ${left}px;
  `}

  ${({ right }) => right && css`
    right: ${right}px;
  `}

  ${({ bottom }) => bottom && css`
    bottom: ${bottom}px;
  `}
`;

export const Tooltip: FC<ITooltipProps> = (props): JSX.Element => {
  const { 
    children, 
    left,
    top,
    right,
    bottom,
    className,
    trigger = "click",
    offset = [0, 8], 
    delayHide, 
    delayShow, 
    defaultVisible, 
    placement, 
    interactive,
    onVisibleChange 
  } = props;

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({
    trigger,
    placement,
    delayHide,
    delayShow,
    offset,
    interactive,
    defaultVisible,
    onVisibleChange
  });

  return (
    <>
      <StyledTrigger
        isLink
        ref={setTriggerRef}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
        className={className}
      >
        <Icon size={24} name="settings" color="black" colorProperty="stroke"  />
      </StyledTrigger>
      {visible && (
        <StyledTooltip 
          ref={setTooltipRef}
          {...getTooltipProps({ className: 'tooltip-container' })}
        >
          <StyledTooltipArrow { ...getArrowProps({ className: "tooltip-arrow" }) } />
          <StyledTooltipContent>
            { children }
          </StyledTooltipContent>
        </StyledTooltip>
      )}
    </>
  )
}