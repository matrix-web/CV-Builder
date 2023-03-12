import { FC } from "react";
import styled from "styled-components";
import { Button, Icon} from "@/components/UI";
import { colors } from "@/helpers";

interface ChipProps {
  text?: string;
  color?: string;
  onRemove?: () => void;
  onClick?: () => void;
}

const StyledChip = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  background: ${({ color }) => colors[color]};
  font-size: 12px;
  line-height: 12px;
`;

export const Chip: FC<ChipProps> = (props): JSX.Element => {
  const {
    text,
    color = "gray200",
    onRemove,
    onClick
  } = props;

  return (
    <StyledChip color={color} onClick={onClick}>
      { text }
      <Button tabIndex="-1" isLink onClick={onRemove}>
        <Icon name="cross" size={12} color="gray500" colorProperty="fill" />
      </Button>
    </StyledChip>
  );
}