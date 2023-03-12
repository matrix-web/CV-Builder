import { FC, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import { IModalContextValue, ModalContext } from "@/contexts/ModalContext";
import { Modal, Title, Button, Chips, FileUpload } from "@/components/UI";
import { ButtonVariants } from "@/helpers/interfaces";
import { InputWithValidation } from "../UI/Input/InputWithValidation";
import { ResumeContext } from "@/contexts/ResumeContext";
import { IProject, ResumeActionTypes } from "@/models";

interface ProjectModalProps {
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

const INITIAL_FORM_STATE:IProject = {
  id: "",
  title: "",
  img: "",
  description: "",
  technologies: []
}

const StyledFormButton = styled(Button)``;

export const ProjectModal: FC<ProjectModalProps> = (props): JSX.Element => {
  const { name = "project", title = "Add Project", hasClose = true } = props;
  const [ modalState , setModalContext = () => ({})] = useContext(ModalContext);
  const { state, dispatch } = useContext(ResumeContext);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [form, setForm] = useState<IProject>(INITIAL_FORM_STATE);

  const {
    control,
    reset,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: INITIAL_FORM_STATE,
  });

  const handleSubmitLocal = (data: IProject) => {
    data.id = uuidv4();
    if (form.technologies.length) {
      data.technologies = form.technologies
    }

    if (form.img.length) {
      data.img = form.img;
    }

    dispatch({
      type: ResumeActionTypes.SET_PROJECTS,
      payload: data
    });
    setModalContext((prev) => ({
      ...prev,
      project: false
    }))
    reset(INITIAL_FORM_STATE);
  }

  const handleUpload = (files: File[]) => {
    setForm(prev => ({...prev, img: URL.createObjectURL(files[0])}))
  }

  useEffect(() => {
    const keys = Object.keys(modalState?.payload ?? {});
    if (keys.length) {
      keys.forEach((key: any) => setValue(key, modalState?.payload[key]));
      setIsEdit(true);
    }
  }, [modalState]);

  return (
    <Modal name={name} hasClose={hasClose}>
      <StyledModalHeader>
        <StyledTitle tag="h3">{ title }</StyledTitle>
        <StyledModalContent>
          <StyledForm onSubmit={handleSubmit(handleSubmitLocal)}>
            <StyledInputs>
              <InputWithValidation 
                control={control}
                error={errors?.title}
                rules={{
                  required: "This field is required",
                }}
                name="title"
                placeholder="Project title"
                value={form.title}
                onChange={(value) => setForm((prev) => ({...prev, title: value}))}
              />
              <Chips 
                value={form.technologies}
                onChange={value => setForm(prev => ({...prev, technologies: value}))} 
              />
              <InputWithValidation 
                control={control}
                error={errors?.description}
                rules={{
                  required: "This field is required",
                }}
                name="description"
                isTextArea
                placeholder="Project description"
                value={form.description ?? ""}
                onChange={(value) => setForm((prev) => ({...prev, description: value}))}
              />
              <FileUpload 
                onUpload={handleUpload}
              />
            </StyledInputs>
            <StyledFormButton isBlock variant={ButtonVariants.SECONDARY}
            >{isEdit ? "Edit" : "Add"}</StyledFormButton>
          </StyledForm>
        </StyledModalContent>
      </StyledModalHeader>
    </Modal>
  )
}
