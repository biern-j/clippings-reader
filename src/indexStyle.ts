import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* Base */
*,
*::after,
*::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit; 
}

html {
font-size: 62.5%;
}

body {
    border: 1px solid #eee;
    border-radius: 5px;
    margin: 3px;
}

html,
body {
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
}
`

export const Container = styled.div`
  margin: 0 -1rem;
  padding: 1rem 5rem;
`
/* Typography */

/* Utils */
