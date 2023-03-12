import { FC, useContext, useState } from "react";
import styled from "styled-components";
import { About } from "../About/About";
import { ResumeContext } from "@/contexts/ResumeContext";
import { ModalContext } from "@/contexts/ModalContext";
import { CardContent } from "@/components/CardContent/CardContent";
import { Title, Paragraph } from "../UI";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import {
  StyledBox,
  StyledFlipper
} from "./FlipperCard.style";
import { IProject, ResumeActionTypes } from "@/models";

const StyledSwiper = styled(Swiper)`
  margin: auto;
  width: 320px;
`;

const StyledSwiperSlide = styled(SwiperSlide)``;

export const FlipperCard: FC = (): JSX.Element => {
  const { state, dispatch } = useContext(ResumeContext);
  const [, setModalContext = () => ({})] = useContext(ModalContext);
  const [socials] = useState([
    {
      id: 1,
      name: "fb",
      link: "#"
    },
    {
      id: 2,
      name: "linkedin",
      link: "#"
    },
    {
      id: 2,
      name: "instagram",
      link: "#"
    },
    {
      id: 3,
      name: "telegram",
      link: "#"
    },
    {
      id: 4,
      name: "twitter",
      link: "#"
    }
  ]);

  const handleRemove = (id: string | number) => {
    const projectList = state.projects.filter(project => project.id !== id);

    dispatch({
      type: ResumeActionTypes.REMOVE_PROJECT,
      payload: projectList
    });
  }

  const handleEdit = (project: IProject) => {
    setModalContext((prev) => ({
      ...prev,
      project: true,
      payload: project
    }))
  }

  return (
    <StyledBox>
      <StyledFlipper id="target">
        <CardContent 
          isFront
          socials={socials}
          linkTitle="Portfolio"
          isEdit={Object.keys(state.about).length > 0}
        >
          <About title="About me:" info={state.about} />
        </CardContent>
        <CardContent 
          isBack
          linkTitle="Home"
          socials={socials}
        >
          <Title tag="h1" style={{marginBottom: "2rem"}}>Portfolio</Title>
          {state.projects.length ? <StyledSwiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper"
            >
              {state.projects.map(project => 
                <StyledSwiperSlide key={project.id}>
                  <ProjectCard 
                    project={project} 
                    onRemove={handleRemove}
                    onEdit={handleEdit}
                  />
                </StyledSwiperSlide>
              )}
          </StyledSwiper> : 
            <Paragraph color="gray300" size={18}>You don't have any projects yet</Paragraph>
          }
        </CardContent>
      </StyledFlipper>
    </StyledBox>
  )
}