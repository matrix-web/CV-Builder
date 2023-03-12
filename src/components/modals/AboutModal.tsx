import { FC, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IModalContextValue, ModalContext } from "@/contexts/ModalContext";
import { Modal, Title, Button } from "@/components/UI";
import { ButtonVariants } from "@/helpers/interfaces";
import { InputWithValidation } from "../UI/Input/InputWithValidation";
import { ResumeContext } from "@/contexts/ResumeContext";
import { IAbout, ResumeActionTypes } from "@/models";
import { validateEmail } from "@/helpers/utils";

interface AboutModalProps {
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

const INITIAL_FORM_STATE: IAbout = {
  firstname: "",
  lastname: "",
  description: "",
  avatar: "",
  post: "",
  phone: "",
  email: "",
  website: "",
  address: ""
}

const StyledFormButton = styled(Button)``;

export const AboutModal: FC<AboutModalProps> = (props): JSX.Element => {
  const { name = "about", title = "About", hasClose = true } = props;
  const [ modalData, setModalContext = () => ({})] = useContext(ModalContext);
  const { state, dispatch } = useContext(ResumeContext);
  const [form, setForm] = useState<IAbout>(INITIAL_FORM_STATE);
  
  const {
    control,
    reset,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues: INITIAL_FORM_STATE,
  });

  useEffect(() => {
    const keys = Object.keys(state.about ?? {});
    if (keys.length) {
      keys.forEach((key: any) => setValue(key, state.about[key]));
    }
  }, [state.about]);

  const handleSubmitLocal = (data: IAbout) => {
    dispatch({
      type: ResumeActionTypes.SET_ABOUT,
      payload: data
    });
    setModalContext((prev) => ({
      ...prev,
      about: false
    }))
    reset(INITIAL_FORM_STATE);
  }

  useEffect(() => {
    console.log(modalData)
  }, [modalData])

  return (
    <Modal name={name} hasClose={hasClose}>
      <StyledModalHeader>
        <StyledTitle tag="h3">{ title }</StyledTitle>
        <StyledModalContent>
          <StyledForm onSubmit={handleSubmit(handleSubmitLocal)}>
            <StyledInputs>
              <InputWithValidation 
                control={control}
                error={errors?.firstname}
                rules={{
                  required: "This field is required",
                }}
                name="firstname"
                placeholder="Firstname"
                value={form.firstname}
                onChange={(value) => setForm((prev) => ({...prev, firstname: value}))}
              />
              <InputWithValidation 
                control={control}
                error={errors?.lastname}
                rules={{
                  required: "This field is required",
                }}
                name="lastname"
                placeholder="Lastname"
                value={form.lastname}
                onChange={(value) => setForm((prev) => ({...prev, lastname: value}))}
              />
              <InputWithValidation 
                control={control}
                error={errors?.email}
                rules={{
                  required: "This field is required",
                  validate: validateEmail,
                }}
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={(value) => setForm((prev) => ({...prev, email: value}))}
              />
              <InputWithValidation 
                control={control}
                error={errors?.phone}
                rules={{
                  required: "This field is required",
                }}
                mask="+7(999) 999-9999"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={(value) => setForm((prev) => ({...prev, phone: value}))}
              />
              <InputWithValidation 
                control={control}
                error={errors?.post}
                rules={{
                  required: "This field is required",
                }}
                name="post"
                placeholder="Post"
                value={form.post}
                onChange={(value) => setForm((prev) => ({...prev, post: value}))}
              />
              <InputWithValidation 
                control={control}
                error={errors?.address}
                rules={{
                  required: "This field is required",
                }}
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={(value) => setForm((prev) => ({...prev, address: value}))}
              />
              <InputWithValidation 
                control={control}
                error={errors?.website}
                name="website"
                placeholder="Website"
                value={form.website || ""}
                onChange={(value) => setForm((prev) => ({...prev, website: value}))}
              />
              <InputWithValidation 
                control={control}
                error={errors?.description}
                name="description"
                isTextArea
                placeholder="Description"
                value={form.description || ""}
                onChange={(value) => setForm((prev) => ({...prev, description: value}))}
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