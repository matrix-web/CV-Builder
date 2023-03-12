import { FC, createElement } from "react";
import styled, { CSSProperties, css } from "styled-components";
import { colors, media } from "@/helpers";
import { Weight, IThemes } from "@/helpers/interfaces";

type Child = number | string | JSX.Element;

interface IParagraph {
  children: Child | Child[];
  tag?: string;
  size?: 12 | 14 | 16 | 18 | 20 | number;
  weight?: Weight;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

interface IStyledParagraph {
  tag: string;
  color: string;
  weight: number;
  children: Child | Child[];
  className?: string;
}

export const themes: IThemes = {
  12: {
    desktop: {
      fontSize: "12px",
      lineHeight: "18px",
    },
  },
  14: {
    desktop: {
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
  16: {
    desktop: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  18: {
    desktop: {
      fontSize: "18px",
      lineHeight: "26px",
    },
  },
  20: {
    desktop: {
      fontSize: "20px",
      lineHeight: "26px",
    }
  }
};

const ParagraphWithTag = (props: IStyledParagraph) =>
  createElement(props.tag, props, props.children);

  const StyledParagraph = styled((props: IStyledParagraph) =>
  ParagraphWithTag(props)
)<IParagraph>`
  font-family: var(--font-brand);
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => colors[color]};
  transition: 0.4s;
  font-size: ${(props) => props.theme.desktop.fontSize};
  line-height: ${(props) => props.theme.desktop.lineHeight};

  ${(props) => 
    props.theme.tablet && css`
      ${media.tablet} {
        font-size: ${props.theme.tablet.fontSize};
        line-height: ${props.theme.tablet.lineHeight};
      }
    `
  }

  ${(props) => 
    props.theme.desktop && css`
      ${media.desktop} {
        font-size: ${props.theme.desktop.fontSize};
        line-height: ${props.theme.desktop.lineHeight};
      }
    `
  }
`;

export const Paragraph: FC<IParagraph> = (props): JSX.Element => {
  const { 
    children,
    size = 16,
    weight = 400,
    tag = "p",
    color = "black",
    className,
    style
  } = props;  


  return (
    <StyledParagraph
      className={className}
      theme={themes[size]}
      tag={tag}
      color={color}
      weight={weight}
      style={style}
    >
      { children }
    </StyledParagraph>
  )
}

