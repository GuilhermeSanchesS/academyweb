import {
  createGlobalStyle,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

interface GlobalStyleProps {
  lock: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height:100%;
  }
  body{
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 300ms;
    overflow: ${(props): string => (props.lock === true ? 'hidden' : 'auto')};
  }
  body, input, button {
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
  }
  button {
    cursor: pointer;
    border: 0;
  }
  
  svg {
    cursor: pointer
  }

  ul {
    list-style: none;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  header {
    background: #EEEEEE;
    a {
      color: #000000;
    }
    button {
      color: #FFFFFF;
      background: #2823EB;
    }
    span{
      background: #2823EB;
    }
  }

  li {
    list-style-type: none;
    font-weight: 700;
    font-family: 'Raleway', Arial;
    font-size: 30px;
  }
  a {
    text-decoration:none;
  }
  @keyframes loadAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity:1
    }
  }
  ${(props): FlattenSimpleInterpolation =>
    props.theme === 'dark'
      ? css`
          body {
            background-color: #fafafa;
            color: #2d2e32;
          }
          svg {
            color: #2d2e32;
          }
          p {
            color: #9E9E9E;
          }
          header{
            background: #EEEEEE;
            a {
              color: #000000;
            }
            button {
              color: #FFFFFF;
              background: #2823EB;
            }
          }
          a {
            color: #2d2e32;
          }
          input,
          textarea {
            border: 1px solid #3e3f43;
            background-color: #3e3f43;
            color: #fff;
          }
          #thumbnail {
            background-color: #4a4b50;
          }
          #green-text {
            color: #64f4ac;
          }
        `
      : css`
          body {
            color: #f0f0f0;
            background-color: #25262a;
          }
          svg {
            color: #f0f0f0;
          }
          header{
            background: linear-gradient(90deg, rgba(7, 3, 82, 0.96) 50%, #040999 79.69%, #1B26FF 100%);
            a {
              color: #FFFFFF;
            }
            button {
              color: #2823EB;
              background: #FFFFFF;
            }
            span{
              background: #FFFFFF;
            }
          }

          p {
            color: #f0f0f0;
          }
          a {
            color: #f0f0f0;
          }
          button{
            color: #FFFFFF;
          }
          input,
          textarea {
            border: 1px solid #e3e3e3;
            background-color: #e3e3e3;
            color: #858585;
          }
          #thumbnail {
            background-color: #c4c4c4;
          }
          #green-text {
            color: #2dbf76;
          }
        `}
`;
