import { FC } from "react";
import styled from "styled-components";
import { Control, Controller } from "react-hook-form";
import { IInputProps, Input } from "@/components/UI/Input/Input";

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

export type IInputWithValidation = Props & IInputProps;

export const InputWithValidation: FC<IInputWithValidation> = ({
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
          <Input
            name={name}
            error={error?.message}
            onChange={(value: string) => {
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
