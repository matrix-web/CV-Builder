import { createElement, FC} from "react";
import styled, { css, CSSProperties } from "styled-components";
import { media } from "@/helpers";
import { Weight, IThemes } from "@/helpers/interfaces";

type Child = JSX.Element | string;

interface ITitle {
  children: Child | Child[];
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: Weight;
  color?: string;
  className?: string;
  style?: CSSProperties;
  transform?: "lowercase" | "uppercase" | "initial";
}

export const themes: IThemes = {
  h1: {
    mobile: {
      fontSize: "36px",
      lineHeight: "44px"
    },
    desktop: {
      fontSize: "40px",
      lineHeight: "48px"
    }
  },
  h2: {
    mobile: {
      fontSize: "32px",
      lineHeight: "40px"
    },
    desktop: {
      fontSize: "36px",
      lineHeight: "44px"
    }
  },
  h3: {
    mobile: {
      fontSize: "28px",
      lineHeight: "36px"
    },
    desktop: {
      fontSize: "32px",
      lineHeight: "40px"
    }
  },
  h4: {
    mobile: {
      fontSize: "24px",
      lineHeight: "32px"
    },
    desktop: {
      fontSize: "28px",
      lineHeight: "36px"
    }
  },
  h5: {
    mobile: {
      fontSize: "20px",
      lineHeight: "28px"
    },
    desktop: {
      fontSize: "24px",
      lineHeight: "32px"
    }
  },
  h6: {
    mobile: {
      fontSize: "18px",
      lineHeight: "28px"
    },
    desktop: {
      fontSize: "20px",
      lineHeight: "28px"
    }
  },
}

const TitleWithTag = (props: ITitle) => 
  createElement(props.tag, { ...props, tag: null }, props.children);

const StyledTitle = styled((props: ITitle) =>
TitleWithTag(props)
)<ITitle>`
  font-family: var(--font-shantell);
  font-weight: ${(props) => props.weight};
  color: ${(props) => `var(--color-${props.color})`};
  font-size: ${(props) => props.theme.mobile.fontSize};
  line-height: ${(props) => props.theme.mobile.lineHeight};
  text-transform: ${(props) => props.transform};

  ${(props) => 
    props.theme.desktop && css`
      ${media.desktop} {
        font-size: ${props.theme.desktop.fontSize};
        line-height: ${props.theme.desktop.lineHeight};
      }
    `
  }
`;

export const Title: FC<ITitle> = (props): JSX.Element => {
  const { 
    children,
    tag,
    weight = 700,
    color = "black",
    className = "",
    transform = "initial",
    style
  } = props;

  return (
    <StyledTitle
      className={className}
      theme={themes[tag]}
      tag={tag}
      color={color}
      style={style}
      transform={transform}
      weight={weight}
    >
      { children }
    </StyledTitle>
  );
}