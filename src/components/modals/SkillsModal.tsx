import { FC, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import { IModalContextValue, ModalContext } from "@/contexts/ModalContext";
import { Modal, Title, Button, Range, RangeWithValidation } from "@/components/UI";
import { ButtonVariants } from "@/helpers/interfaces";
import { InputWithValidation } from "../UI/Input/InputWithValidation";
import { ResumeContext } from "@/contexts/ResumeContext";
import { ISkill, ResumeActionTypes } from "@/models";

interface SkillsModalProps {
  name?: keyof IModalContextValue;
  title?: string;
  hasClose?: boolean;
}

const StyledTitle = styled(Title)`
  margin-bottom: 24px;
`;

const StyledModalHeader = styled.header``;

const StyledModalContent = styled.div``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const INITIAL_FORM_STATE: ISkill = {
  id: "",
  name: "",
  value: 0
}

const StyledFormButton = styled(Button)``;

export const SkillsModal: FC<SkillsModalProps> = (props): JSX.Element => {
  const { name = "skills", title = "Add skills", hasClose = true } = props;
  const [, setModalContext = () => ({})] = useContext(ModalContext);
  const { state, dispatch } = useContext(ResumeContext);
  const [form, setForm] = useState<ISkill>(INITIAL_FORM_STATE);

  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: INITIAL_FORM_STATE,
  });

  const handleSubmitLocal = (data: ISkill) => {
    data.id = uuidv4();
    dispatch({
      type: ResumeActionTypes.SET_SKILLS,
      payload: data
    });
    setModalContext((prev) => ({
      ...prev,
      skills: false
    }))
    reset(INITIAL_FORM_STATE);
  }

  return (
    <Modal name={name} hasClose={hasClose}>
      <StyledModalHeader>
        <StyledTitle tag="h3">{ title }</StyledTitle>
        <StyledModalContent>
          <StyledForm onSubmit={handleSubmit(handleSubmitLocal)}>
            <StyledInputs>
              <InputWithValidation 
                control={control}
                error={errors?.name}
                rules={{
                  required: "This field is required",
                }}
                name="name"
                placeholder="Skill name"
                value={form.name}
                onChange={(value) => setForm((prev) => ({...prev, name: value}))}
              />
              <RangeWithValidation
                control={control}
                name="value"
                value={form.value}
                error={errors?.value}
                rules={{
                  required: "This field is required",
                }}
                label={`Skill level ${form.value}%`}
                onChange={(val: number) => setForm((prev) => ({ ...prev, value: +val }))}
                isDisabled={false}
              />
            </StyledInputs>
            <StyledFormButton isBlock variant={ButtonVariants.SECONDARY}
            >Add</StyledFormButton>
          </StyledForm>
        </StyledModalContent>
      </StyledModalHeader>
    </Modal>
  )
}
