import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      scroll-behavior: smooth;

    }


    body {
      font-family: 'Montserrat', sans-serif;
      font-feature-settings: 'pnum' on, 'lnum' on;

      overflow-x: hidden;
      a{
        text-decoration: none;
      }



    }

    ::-webkit-scrollbar {
    width: 8px;
    background: #121214;
}
::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background:
    ${(props) => props.theme.colors.green};

    ;

}

  `

export default GlobalStyles
