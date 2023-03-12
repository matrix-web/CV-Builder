import { FC, useContext, useEffect, ReactNode, MouseEvent } from "react";
import styled from "styled-components";
import { colors, media } from "@/helpers";
import { IModalContextValue, ModalContext } from "@/contexts/ModalContext";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { createPortal } from "react-dom";
import { Button, Icon } from "@/components/UI";

interface IModal {
  children: ReactNode | ReactNode[];
  name: keyof IModalContextValue;
  className?: string;
  hasClose?: boolean;
  onClose?: () => void;
}

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${colors.blackAlpha600};
`;

const StyledDialog = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.white};

  ${media.tablet} {
    width: 520px;
    height: auto;
    padding: 32px 24px;
    border-radius: 10px;
  }
`;

const StyledButtonClose = styled(Button)`
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 20;
`;

const ModalWrapper = styled.div`
  max-height: 650px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.gray400};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.blue200};
    border-radius: 5px;
  }
`;

export const Modal: FC<IModal> = (props): JSX.Element => {
  const {
    children,
    className,
    name,
    hasClose,
    onClose
  } = props;
  const [modalContext, setModalContext = () => ({})] = useContext(ModalContext);
  useLockBodyScroll();

  const handleClose = () => {
    setModalContext((prevState) => ({
      ...prevState,
      [name]: false
    }))
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleEscClick = (event: KeyboardEvent) => {
      if (event.code === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleEscClick);

    return () => {
      document.removeEventListener("keydown", handleEscClick);
      setModalContext((prevState) => ({ ...prevState, payload: null }))
    }
  }, []);

  return modalContext && modalContext[name] ? (
    createPortal(
      <StyledOverlay onClick={() => (onClose ? onClose() : handleClose())}>
        <ModalWrapper>
          <StyledDialog className={className} onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}>
            {hasClose ? 
              <StyledButtonClose isLink onClick={handleClose}>
                <Icon 
                  name="cross" 
                  size={24} 
                  color="black"
                  colorProperty="stroke"
                />
              </StyledButtonClose> : <></>}
            { children }
          </StyledDialog>
        </ModalWrapper>
      </StyledOverlay>,
      document.body,
    )
  ) : <></>
}