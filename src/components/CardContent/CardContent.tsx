import { FC, useContext, ReactNode } from "react";
import { Button, Icon, Tooltip } from "@/components/UI";
import { ButtonVariants } from "@/helpers/interfaces";
import { ModalContext } from "@/contexts/ModalContext";
import {
  StyledCardContent,
  StyledLink,
  StyledActions,
  StyledSocialList,
  StyledSocialItem
} from "./CardContent.style";

interface ISocial {
  id: number | string;
  name: string;
  link: string;
}

interface CardContentProps {
  children: ReactNode | ReactNode[];
  linkTitle?: string;
  isFront?: boolean;
  isBack?: boolean;
  socials?: ISocial[];
  isEdit?: boolean;
}

export const CardContent: FC<CardContentProps> = (props): JSX.Element => {
  const {
    children,
    isFront,
    isBack,
    socials,
    isEdit = false,
    linkTitle = ""
  } = props;
  const [, setModalContext = () => ({})] = useContext(ModalContext);

  return (
    <StyledCardContent isFront={isFront} isBack={isBack}>
      { isFront ? 
        <StyledLink href="#target">
          { linkTitle }
        </StyledLink>
        : <StyledLink href="#close">
        { linkTitle }
      </StyledLink>
      }
      <Tooltip 
        right={40} 
        top={30} 
        interactive 
      >
        <StyledActions>
          { isFront &&
            <Button 
              isLink 
              variant={ButtonVariants.SECONDARY} 
              onClick={() => setModalContext((prev) => ({
              ...prev,
              about: true
            }))}>About {isEdit ? "edit" : "add"}</Button>
          }
          { isBack &&
            <Button 
              isLink 
              variant={ButtonVariants.SECONDARY} 
              onClick={() => setModalContext((prev) => ({
              ...prev,
              project: true
            }))}>Projects {isEdit ? "edit" : "add"}</Button>
          }
        </StyledActions>
      </Tooltip>
      {socials ? <StyledSocialList>
        {socials.map(social => 
          <StyledSocialItem key={social.id}>
            <Button isLink href={social.link}>
              <Icon name={social.name} color="black" size={24} />
            </Button>
          </StyledSocialItem>
        )}
      </StyledSocialList> : <></>}
      { children }
    </StyledCardContent>
  )
}