import { css } from '@emotion/react';

export default css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  input,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    user-select: none;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    src: url('/fonts/Pretendard-Black.otf') format('opentype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    src: url('/fonts/Pretendard-ExtraBold.otf') format('opentype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: url('/fonts/Pretendard-Bold.otf') format('opentype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: url('/fonts/Pretendard-SemiBold.otf') format('opentype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url('/fonts/Pretendard-Medium.otf') format('opentype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url('/fonts/Pretendard-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    src: url('/fonts/Pretendard-Light.otf') format('opentype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    src: url('/fonts/Pretendard-ExtraLight.otf') format('opentype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    src: url('/fonts/Pretendard-Thin.otf') format('opentype');
  }

  html {
    font-family: 'Pretendard';
    font-size: 62.5%;
    letter-spacing: -0.03rem;
  }

  body {
    -ms-overflow-style: none;
    scrollbar-width: none;

    overscroll-behavior: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  p {
    display: inline;
  }

  li,
  ol,
  ul {
    list-style: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    -webkit-user-drag: none;
  }

  @keyframes down-closing {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }

  @keyframes up-closing {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100vh);
    }
  }
`;
