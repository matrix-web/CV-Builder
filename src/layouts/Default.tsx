import { FC, ReactNode } from "react";
import styled from "styled-components";
import { SkillsModal } from "@/components/modals/SkillsModal";
import { WorkExperienceModal } from "@/components/modals/WorkExperienceModal";
import { AboutModal } from "@/components/modals/AboutModal";
import { ProjectModal } from "@/components/modals/ProjectModal";

interface IDefault {
  children: ReactNode | ReactNode[];
}

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Default: FC<IDefault> = ({ children }): JSX.Element => {

  return (
    <StyledContainer>
      { children }
      <SkillsModal />
      <WorkExperienceModal />
      <AboutModal />
      <ProjectModal />
    </StyledContainer>
  )
}