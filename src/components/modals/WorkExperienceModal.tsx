import { FC, useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IModalContextValue, ModalContext } from "@/contexts/ModalContext";
import { Modal, Title, Button } from "@/components/UI";
import { ButtonVariants } from "@/helpers/interfaces";
import { InputWithValidation } from "../UI/Input/InputWithValidation";
import { ResumeContext } from "@/contexts/ResumeContext";
import { IWorkExp, ResumeActionTypes } from "@/models";

interface WorkExperienceModalProps {
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

const INITIAL_FORM_STATE: IWorkExp = {
  id: "",
  organization: "",
  post: "",
  period: ""
}

const StyledFormButton = styled(Button)``;

export const WorkExperienceModal: FC<WorkExperienceModalProps> = (props): JSX.Element => {
  const { name = "workExperience", title = "Add work experience", hasClose = true } = props;
  const [, setModalContext = () => ({})] = useContext(ModalContext);
  const { state, dispatch } = useContext(ResumeContext);
  const [form, setForm] = useState<IWorkExp>(INITIAL_FORM_STATE);

  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: INITIAL_FORM_STATE,
  });

  const handleSubmitLocal = (data: IWorkExp) => {
    data.id = uuidv4();
  
    dispatch({
      type: ResumeActionTypes.SET_WORK_EXP,
      payload: data
    });
    setModalContext((prev) => ({
      ...prev,
      workExperience: false
    }))
    reset();
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
                error={errors?.organization}
                rules={{
                  required: "This field is required",
                }}
                name="organization"
                placeholder="Organization"
                value={form.organization}
                onChange={(value) => setForm((prev) => ({...prev, organization: value}))}
              />
              <InputWithValidation 
                control={control}
                name="post"
                error={errors?.post}
                rules={{
                  required: "This field is required",
                }}
                placeholder="Post"
                value={form.post}
                onChange={(value) => setForm((prev) => ({...prev, post: value}))}
              />
              <InputWithValidation 
                control={control}
                name="period"
                error={errors?.period}
                rules={{
                  required: "This field is required",
                }}
                placeholder="Period"
                value={form.period}
                onChange={(value) => setForm((prev) => ({...prev, period: value}))}
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
