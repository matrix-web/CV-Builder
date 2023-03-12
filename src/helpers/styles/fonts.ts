import { css } from "styled-components";

export const fonts = css`
  :root {
    --font-Inter: "Inter", sans-serif;
    --font-brand: var(--font-Inter);
    --font-shantell: "Shantell Sans Irregular", sans-serif;
  }

  @font-face {
    font-family: 'Shantell Sans Irregular';
    src: local('Shantell Sans Irregular Bold'), local('ShantellSansIrregular-Bold'),
        url('./fonts/shantell/ShantellSansIrregular-Bold.woff2') format('woff2'),
        url('./fonts/shantell/ShantellSansIrregular-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Shantell Sans Irregular';
      src: local('Shantell Sans Irregular Regular'), local('ShantellSansIrregular-Regular'),
          url('./fonts/shantell/ShantellSansIrregular-Regular.woff2') format('woff2'),
          url('./fonts/shantell/ShantellSansIrregular-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter Regular'), local('Inter-Regular'),
        url('./fonts/Inter/Inter-Regular.woff2') format('woff2'),
        url('./fonts/Inter/Inter-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter Medium'), local('Inter-Medium'),
        url('Inter-Medium.woff2') format('woff2'),
        url('Inter-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter Semi Bold'), local('Inter-SemiBold'),
        url('./fonts/Inter/Inter-SemiBold.woff2') format('woff2'),
        url('./fonts/Inter/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter Bold'), local('Inter-Bold'),
        url('./fonts/Inter/Inter-Bold.woff2') format('woff2'),
        url('./fonts/Inter/Inter-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;