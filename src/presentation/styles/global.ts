import { createGlobalStyle, DefaultTheme, GlobalStyleComponent} from 'styled-components'

const GlobalStyles: GlobalStyleComponent<any, DefaultTheme> = createGlobalStyle`
*{
    padding: 0%;
    margin 0;
    box-sizing: border-box;
}


html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }
`

export default GlobalStyles