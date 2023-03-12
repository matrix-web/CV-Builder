import { createGlobalStyle } from "styled-components";
import { colorsStyles } from "./colors";
import { spacingStyles } from "./spacing";
import { fonts } from "./fonts";
import { media } from "@/helpers/index";

export const GlobalStyles = createGlobalStyle`
  ${colorsStyles}
  ${spacingStyles}
  ${fonts}
  
  body {
    font-family: var(--font-brand);
    font-style: normal;
    font-weight: normal;
    margin: 0;
    max-width: 100vw;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    outline: none;
  }

  menu {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 700;
  }

  ol,
  ul,
  dl {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a,
  button,
  input,
  label,
  select,
  textarea {
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: 0;
    outline: 0;
    background: none;
    padding: 0;
    margin: 0;
  }

  table {
    border-collapse: collapse;
  }

  .space-xxl {
    margin-bottom: calc(var(--space-xxl) - (var(--spacing-coefficient) * 6px));

    @media (${media.tablet}) {
      margin-bottom: var(--space-xxl);
    }
  }
  .space-xl {
    margin-bottom: calc(var(--space-xl) - (var(--spacing-coefficient) * 8px));
    @media (${media.tablet}) {
      margin-bottom: var(--space-xl);
    }
  }
  .space-l {
    margin-bottom: calc(var(--space-xl) - (var(--spacing-coefficient) * 4px));
    @media (${media.tablet}) {
      margin-bottom: var(--space-l);
    }
  }
  .space-m {
    margin-bottom: calc(var(--space-xl) - (var(--spacing-coefficient) * 4px));
    @media (${media.tablet}) {
      margin-bottom: var(--space-m);
    }
  }
  .space-s {
    margin-bottom: calc(var(--space-xl) - (var(--spacing-coefficient) * 2px));
    @media (${media.tablet}) {
      margin-bottom: var(--space-s);
    }
  }
  .space-xs {
    margin-bottom: var(--space-xs);
  }
  .space-xxs {
    margin-bottom: var(--space-xxs);
  }

  .row-reverse{
    flex-direction: row-reverse;
  }
`;