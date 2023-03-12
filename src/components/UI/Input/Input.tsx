import { colors } from "@/helpers";
import { FormEvent, FC, useState } from "react";
import styled from "styled-components";
import { FieldError } from "react-hook-form";
import InputMask from "react-input-mask";
import { Icon, Button } from "@/components/UI";

export interface IInputProps {
  value: string | number;
  onChange: (value: string) => void;
  name?: string;
  error?: string | FieldError;
  type?: "text" | "password";
  placeholder?: string;
  mask?: string;
  maskPlaceholder?: string;
  label?: string;
  isNumeric?: boolean;
  isDisabled?: boolean;
  isTextArea?: boolean;
  isResizable?: boolean;
}

interface StyledInputProps {
  isError?: boolean;
  isResizable?: boolean;
}

const StyledInputWrapper = styled.div<{ isError: boolean }>`
  position: relative;
  background: ${colors.white};
  font-family: var(--font-brand);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding-bottom: ${({ isError }) => isError ? "15px" : "0px"};
`;

const StyledLabel = styled.label`
  position: relative;
  letter-spacing: 0.005em;
  color: ${colors.black};
`;

const StyledLabelText = styled.span`
  display: inline-block;
  margin-bottom: 4px;
`;

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  outline: none;
  border: none;
  padding: 7px 12px;
  border: 1px solid ${({ isError }) => isError ? colors.red400 : colors.gray300};
  border-radius: 4px;
  font-family: var(--font-brand);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.black};
  transition: 0.3s;
  resize: ${({ isResizable }) => isResizable ? "vertial" : "none"};

  &:disabled {
    color: ${colors.gray300};
  }

  &:focus {
    border-color: ${colors.blue200};
  }

  &::placeholder {
    color: ${colors.gray500};
  }
`;

const StyledError = styled.span`
  position: absolute;
  left: 0;
  bottom: -3px;
  font-size: 12px;
  line-height: 20px;
  color: ${colors.error400};
`;

const StyledButtonIcon = styled(Button)<{ isLabel?: boolean }>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: ${({ isLabel }) => isLabel ? `translateY(10%)` : `translateY(-50%)`};
`;

export const Input:FC<IInputProps> = (props): JSX.Element => {
  const {
    value,
    onChange,
    error = "",
    name = "",
    type = "text",
    label = "",
    placeholder = "",
    mask = "",
    maskPlaceholder = "",
    isNumeric = false,
    isDisabled = false,
    isTextArea = false,
    isResizable = false
  } = props;

  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

  const validateNumericInput = (value: string): string => {
    return value.replace(/\D/g, "").replace(/^0+(?!$)/, "");
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement>
  ): void => {
    if (!onChange) return;
    onChange(
      isNumeric
        ? validateNumericInput(event.currentTarget.value)
        : event.currentTarget.value
    );
  };

  return (
    <StyledInputWrapper isError={!!error}>
      <StyledLabel>
        {label && 
          <StyledLabelText>
            label
          </StyledLabelText>
        }
        {!!mask ? 
          <InputMask
          mask={mask}
          maskPlaceholder={maskPlaceholder}
          value={value}
          disabled={isDisabled}
          onChange={handleInputChange}
        >
          {(inputProps) => 
            <StyledInput 
              {...inputProps}
              isError={!!error}
              as={isTextArea ? "textarea" : "input"}
              type={isPassVisible ? "text" : type}
              name={name}
              placeholder={placeholder}
              disabled={isDisabled}
              isResizable={!!isResizable}
              isTextarea={!!isTextArea}
            />
          }
          
        </InputMask>
          : 
            <StyledInput 
              value={value}
              isError={!!error}
              as={isTextArea ? "textarea" : "input"}
              type={isPassVisible ? "text" : type}
              name={name}
              placeholder={placeholder}
              disabled={isDisabled}
              isResizable={isResizable}
              onChange={handleInputChange}
            />
          }
        {type === "password" && 
          <StyledButtonIcon 
            isLink 
            isLabel={!!label}
            onClick={() => type === "password" ? setIsPassVisible((prev) => !prev) : null}
          >
            <Icon 
              name={isPassVisible ? "eye" : "eye-closed"}
              color="gray500"
              size={24}
              colorProperty="fill"
            />
          </StyledButtonIcon>
        }
      </StyledLabel>
      {error ? (
        <StyledError>{error as string}</StyledError>
      ) : null}
    </StyledInputWrapper>
  );
}