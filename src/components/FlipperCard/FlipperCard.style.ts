import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100%;
  height: 600px;
  -webkit-perspective: 1200;
  perspective: 1200;
  -moz-transform: perspective(1200px);
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d; 
  transform-style: preserve-3d;
  position: relative;
`;

export const StyledFlipper = styled.div<{ toggle?: boolean }>`
  border: 10px solid rgba(255,255,255,0.2);
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: .7s linear;

  &:target {
    transform: rotateX(180deg);
  }  
`;