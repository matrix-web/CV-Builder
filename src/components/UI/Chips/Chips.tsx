import { FC, useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import styled, { css } from "styled-components";
import { colors } from "@/helpers";
import { Chip } from "@/components/UI";

interface ChipsProps {
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  value?: string[];
  onChange?: (values: string[]) => void;
}

enum Keys {
  TAB = "Tab",
  ENTER = "Enter"
}

const StyledChips = styled.div<{ isDisabled: boolean, isFocus: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  outline: none;
  border: 1px solid ${({ isFocus }) => isFocus ? colors.blue200 : colors.gray300};
  border-radius: 4px;
  font-family: var(--font-brand);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.black};
  transition: all 0.3s ease 0s;
  padding: 7px 12px;
  
  ${({ isDisabled }) => isDisabled && css`
    pointer-events: none;
  `};
`;

const StyledChipsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
`;

const StyledChipsItem = styled.li``;

const StyledInput = styled.input`
  border: none;
`;

export const Chips: FC<ChipsProps> = (props): JSX.Element => {
  const {
    name,
    placeholder = "Input text",
    value = [],
    isDisabled = false,
    onChange
  } = props;
  const [val, setVal] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch(event.key) {
      case Keys.TAB: 
        if (val) {
          value.push(val);
          setVal("");
          onChange && onChange(value);
        }
        inputRef.current?.focus();
        break;
    }
  }

  const handleRemove = (index: number) => {
    const copy = Object.assign(value);
    copy.splice(index, 1);
    onChange && onChange(copy);
  }

  const handleMouseEnter = () => {
    setIsFocus(true);
    inputRef.current?.focus();
  }

  const handleMouseLeave = () => {
    setIsFocus(false);
    inputRef.current?.blur();
  }

  return (
    <StyledChips 
      isDisabled={isDisabled}
      isFocus={isFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledChipsList>
        {value.length ? value.map((chipText, index) => (
          <StyledChipsItem key={chipText}>
            <Chip text={chipText} onRemove={() => handleRemove(index)} />
          </StyledChipsItem>
        ))
          : <></>
        }
        <StyledChipsItem>
          <StyledInput
            name={name}
            ref={inputRef}
            type="text"
            value={val}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setVal(event.target.value)}
            onKeyDown={handleKeydown}
          />
        </StyledChipsItem>
      </StyledChipsList>
    </StyledChips>
  )
}