import { FC } from "react";
import styled from "styled-components";
import { Control, Controller } from "react-hook-form";
import { IRangeProps, Range } from "@/components/UI/Range/Range";

const StyledWrap = styled.div`
  position: relative;
`;

type Props = {
  control: Control<any>;
  name: `${string}` | `${string}.${string}` | `${string}.${number}`;
  error?: any;
  rules?: {
    [key: string]: any;
  };
};

export type IInputWithValidation = Props & IRangeProps;

export const RangeWithValidation: FC<IInputWithValidation> = ({
  name,
  control,
  rules,
  error,
  value,
  onChange,
  ...props
}) => {
  return (
    <StyledWrap>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Range
            name={name}
            error={error?.message}
            onChange={(value: number) => {
              field.onChange(value);
              if (onChange) onChange(value);
            }}
            value={field.value}
            {...props}
          />
        )}
        {...props}
      />
    </StyledWrap>
  );
};
