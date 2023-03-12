import { colors } from "@/helpers";
import { FC } from "react";
import styled from "styled-components";
import { Button, Icon, Paragraph, Title } from "../UI";
import { ButtonVariants } from "@/helpers/interfaces";
import { IProject } from "@/models";

interface ProjectCardProps {
  project: IProject;
  onEdit?: (project: IProject) => void;
  onRemove?: (id: string | number) => void;
}

const StyledCard = styled.section`
  max-width: 350px;
  background: ${colors.white};
  box-shadow: 0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1);
  border-radius: 10px;
`;

const StyledCardHeader = styled.header`
  width: 100%;
  max-height: 220px;
  overflow: hidden;
  border-radius: 10px;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const StyledCardContent = styled.div`
  padding: 20px 15px;
`;

const StyledCardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px 15px;
  border-top: 1px solid ${colors.gray300};
`;

const StyledBadge = styled.div`
  color: ${colors.white};
  font-family: var(--font-brand);
  font-size: 10px;
  padding: 5px;
  border-radius: 4px;
  background-color: ${colors.secondary400};
`;

const StyledTechs = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ProjectCard: FC<ProjectCardProps> = (props): JSX.Element => {
  const { 
    project,
    onEdit,
    onRemove
  } = props;

  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledImg src={project.img} alt={project.title} />
      </StyledCardHeader>
      <StyledCardContent>
        <Title tag="h6">{ project.title }</Title>
        {project.description ? 
          <Paragraph size={12}>{ project.description }</Paragraph> :
          <></>
        }
        <StyledTechs>
          { project.technologies.map(tech => 
            <StyledBadge key={tech} >{ tech }</StyledBadge>
          )}
        </StyledTechs>
      </StyledCardContent>
      <StyledCardFooter>
        <Button 
          variant={ButtonVariants.SECONDARY}
          onClick={() => onEdit && onEdit(project)}
        >Edit</Button>
        <Button 
          isLink
          onClick={() => onRemove && onRemove(project.id)}
        >
          <Icon name="trash" color="red400" size={24} colorProperty="stroke" />
        </Button>
      </StyledCardFooter>
    </StyledCard>
  )
}