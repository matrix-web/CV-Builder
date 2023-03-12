import styled, { css } from "styled-components";
import { Button } from "@/components/UI";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  row-gap: 2rem;
`;

export const StyledAvatarWrapper = styled.div``;

export const StyledAboutDescription = styled.div``;

export const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledAboutHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledAboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledWorkExperience = styled.section``;

export const StyledBoxHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const StyledSkills = styled.section``;

export const StyledButtonLink = styled(Button)`
  margin-top: -8px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledListItem = styled.li`
  position: relative;
`;

export const StyledRemoveButton = styled(Button)<{ isExp?: boolean, isSkill?: boolean }>`
  position: absolute;

  ${({ isExp }) => isExp && css`
    bottom: 1px;
    right: 55px;
  `}

  ${({ isSkill }) => isSkill && css`
    top: 0;
    right: 0;
  `}
`;