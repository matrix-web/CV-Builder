import { FC, ChangeEvent, useEffect, useRef } from "react";
import styled, { CSSProperties } from "styled-components";
import { colors } from "@/helpers";
import { FieldError } from "react-hook-form";

export interface IRangeProps {
  value: number;
  onChange?: (val: number) => void;
  label?: string;
  name?: string;
  step?: number;
  error?: string | FieldError;
  min?: number;
  max?: number;
  color?: string;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const StyledLabel = styled.label`
  position: relative;
  padding-bottom: 15px;
  font-family: var(--font-brand);
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const StyledRangeInput = styled.input<{ color: string; }>`
  -webkit-appearance: none;
  margin-right: 15px;
  width: 99%;
  height: 7px;
  background: var(--color-gray-200);
  border-radius: 5px;
  background-image: ${({ color }) => `linear-gradient(var(--color-${color}), var(--color-${color}))`} ;
  background-size: 0% 0%;
  background-repeat: no-repeat;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled)::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${({ color }) => `var(--color-${color})`};
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;
  }

  &:not(:disabled)::-moz-range-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${({ color }) => `var(--color-${color})`};
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;
  }

  &:not(:disabled)::-ms-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${({ color }) => `var(--color-${color})`};
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;
  }

  &::-webkit-slider-thumb:hover {
    background: ${({ color }) => `var(--color-${color})`};
  }

  &::-moz-range-thumb:hover {
    background: ${({ color }) => `var(--color-${color})`};
  }

  &::-ms-thumb:hover {
    background: ${({ color }) => `var(--color-${color})`};
  }

  &::-webkit-slider-runnable-track  {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

const StyledError = styled.span`
  position: absolute;
  font-size: 12px;
  line-height: 20px;
  color: ${colors.error400};
`;

export const Range: FC<IRangeProps> = (props): JSX.Element => {
  const {
    label,
    name,
    value,
    step = 1,
    min = 0,
    max = 100,
    error = "",
    color = "blue-400",
    isDisabled = true,
    className,
    style,
    onChange
  } = props;

  const refRange = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(+event.target.value)
    }
  }

  useEffect(() => {
    const size = (value - min) * 100 / (max - min);

    if (refRange.current) {
      refRange.current.style.backgroundSize = `${size}% 100%`;
    }
  }, [value]);

  return (
    <StyledLabel>
      { label ? label : ""}
      <StyledRangeInput 
        ref={refRange}
        type="range"
        name={name}
        step={step}
        min={min}
        value={value}
        max={max}
        color={color}
        disabled={isDisabled}
        className={className}
        style={style}
        onChange={handleChange}
      />
      {error ? (
        <StyledError>{error as string}</StyledError>
      ) : null}
    </StyledLabel>
  );
}