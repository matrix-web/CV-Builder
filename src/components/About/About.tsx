import { FC, useContext } from "react";
import { ButtonVariants, AvatarVariants } from "@/helpers/interfaces";
import { 
  Avatar,
  Button, 
  Icon,
  Title, 
  Paragraph,
  Range, 
} from "@/components/UI";
import { ModalContext } from "@/contexts/ModalContext";
import { ResumeContext } from "@/contexts/ResumeContext";
import { IAbout, ISkill, IWorkExp, ResumeActionTypes } from "@/models";
import {
  StyledWrapper,
  StyledAvatarWrapper,
  StyledAboutDescription,
  StyledAbout,
  StyledAboutHeader,
  StyledAboutContent,
  StyledBlock,
  StyledWorkExperience,
  StyledBoxHeader,
  StyledSkills,
  StyledButtonLink,
  StyledList,
  StyledListItem,
  StyledRemoveButton
} from "./About.style";

interface AboutProps {
  title: string;
  info?: IAbout;
}


export const About: FC<AboutProps> = (props): JSX.Element => {
  const { 
    title, 
    info = {
      address: "",
      firstname: "",
      avatar:  "",
      lastname: "",
      post: "",
      phone: "",
      email: "",
      description: ""
    }
  } = props;
  const [, setModalContext = () => ({})] = useContext(ModalContext);
  const { state, dispatch } = useContext(ResumeContext);

  const handleRemoveExp = (id: string | number) => {
    const workexpList = state.workExperience.filter(workexp => workexp.id !== id);

    dispatch({
      type: ResumeActionTypes.REMOVE_WORK_EXP,
      payload: workexpList,
    })
  }

  const handleRemoveSkill = (id: string | number) => {
    const skillsList = state.skills.filter(skill => skill.id !== id);

    dispatch({
      type: ResumeActionTypes.REMOVE_SKILLS,
      payload: skillsList
    })
  }

  const handleInputChange = (event: any) => {
    const file = event.target.files[0];
    const previewUrl = URL.createObjectURL(file);

    dispatch({
      type: ResumeActionTypes.SET_ABOUT,
      payload: {
        ...state.about,
        avatar: previewUrl
      }
    })
  }

  const handleClickAvatar = () => {
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.click();

    inputElement.addEventListener("change", handleInputChange)
  }

  return (
    <StyledWrapper>
      <StyledAvatarWrapper>
        <Avatar 
          img={{src: state.about.avatar ?? "", alt: `${state.about.firstname} ${state.about.lastname}`}} 
          variant={AvatarVariants.XHUGE}
          isClickable
          onClick={handleClickAvatar} 
        />
      </StyledAvatarWrapper>
      { info.firstname && info.lastname ? 
        <StyledAboutDescription>
            <Title tag="h1">{`${info?.firstname} ${info?.lastname}`}</Title>
            { info.description ? 
              <Paragraph size={16}>{ info.description }</Paragraph> : <></>}
        </StyledAboutDescription> : 
        <Paragraph color="gray300" size={18}>No information available</Paragraph>
      }
      
      <StyledAbout>
        <StyledAboutHeader>
          <Title tag="h3" transform="uppercase">{ title }</Title>
          {info.post && info.address ?
            <>
              <Paragraph size={16}>{ info.post }</Paragraph>
              <Paragraph size={16}>{info.address}</Paragraph>
              {info.website ? 
                <Paragraph size={16}>{info.website}</Paragraph> 
                : <></>
              }
            </>
          : <Paragraph color="gray300" size={18}>No information available</Paragraph>
          }
        </StyledAboutHeader>
        { info.email && info.phone ? 
          <StyledAboutContent>
            <Button 
              isLink 
              href={`mailto: ${info.email}`}
              variant={ButtonVariants.SECONDARY}
            >
              <Icon 
                name="mail" 
                size={16} 
                color="secondary400" 
                colorProperty="stroke" 
              />
              { info.email }
            </Button>
            <Button 
              isLink 
              href={`tel: ${info.phone}`}
              variant={ButtonVariants.SECONDARY}
            >
              <Icon 
                name="phone" 
                size={16} 
                color="secondary400" 
                colorProperty="stroke" 
              />
              { info.phone }
            </Button>
          </StyledAboutContent> :
          <Paragraph color="gray300" size={18}>No information available</Paragraph>
        }
        
      </StyledAbout>
      <StyledBlock>
        <StyledWorkExperience>
          <StyledBoxHeader>
            <Title tag="h3" transform="uppercase">Work experience:</Title>
            <StyledButtonLink isLink onClick={() => setModalContext(prevState => ({
              ...prevState,
              workExperience: true
            }))}>
              <Icon 
                name="plus"
                size={24}
                color="black"
                colorProperty="fill"
              />
            </StyledButtonLink>
          </StyledBoxHeader>
          {state?.workExperience?.length ? 
            <StyledList>
              {state.workExperience.map((item: IWorkExp, idx: number) => 
              <StyledListItem key={idx}>
                <Title tag="h6">{ item.organization }</Title>
                <Paragraph size={16}>{ item.post }</Paragraph>
                <Paragraph size={12} color="gray400">{ item.period }</Paragraph>
                <StyledRemoveButton isLink isExp onClick={() => handleRemoveExp(item.id)}>
                  <Icon name="trash" size={16} color="red400" colorProperty="stroke" />
                </StyledRemoveButton>
              </StyledListItem>)}
            </StyledList> 
          : <></>}
        </StyledWorkExperience>
        <StyledSkills>
          <StyledBoxHeader>
            <Title tag="h3" transform="uppercase">Skills:</Title>
            <StyledButtonLink isLink onClick={() => setModalContext(prevState => ({
              ...prevState,
              skills: true
            }))}>
              <Icon 
                name="plus"
                size={24}
                color="black"
                colorProperty="fill"
              />
            </StyledButtonLink>
          </StyledBoxHeader>
          {state?.skills?.length ? 
            <StyledList>
              { state.skills.map((skill: ISkill, idx: number) => 
                <StyledListItem key={idx}>
                  <Range label={`${skill.name} - ${skill.value}%`} value={skill.value} isDisabled />
                  <StyledRemoveButton isLink isSkill onClick={() => handleRemoveSkill(skill.id)}>
                    <Icon name="trash" size={16} color="red400" colorProperty="stroke" />
                  </StyledRemoveButton>
                </StyledListItem>
              ) }
            </StyledList> :
            <></>
          }
        </StyledSkills>
      </StyledBlock>
    </StyledWrapper>
  )
}