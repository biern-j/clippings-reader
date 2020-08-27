import styled, { createGlobalStyle } from 'styled-components'

/*Abstract: variables */
export const colorBlack = '#000'
export const colorWhite = '#fff'
export const defaultFontSize = '2rem'
export const colorGrayDark = '#777'
export const colorPrimary = '#F2E366'
export const colorSecondary = '#9d66f2'
export const colorTertiary = '#66bbf2'

/*Abstract: utilities*/

export const uCenterText = 'text-align: center'

export const uMarginBottomBig = 'margin-bottom: 8rem'

export const uMarginBottomMedium = 'margin-bottom: 4rem'

export const uMarginBottomSmall = ' margin-bottom: 1.5rem'

export const uMarginTopBig = 'margin-top: 8rem'

export const uMarginTopHuge = 'margin-top: 10rem'

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
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: ${colorGrayDark};
}

html,
body {
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
}
`

export const HeaderPrimary = styled.h1`
  color: ${colorBlack};
  text-transform: uppercase;
  margin-bottom: 1rem;
`

export const HeaderPrimaryMain = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 100;
  letter-spacing: 3.5rem;
`

export const HeaderPrimarySub = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 1200;
  letter-spacing: 1.75rem;
`

export const HeaderSecondary = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  color: ${colorBlack};
  letter-spacing: 2px;

  &:hover {
    text-shadow: 0.5rem 1rem 2rem rgba(${colorBlack}, 0.2);
  }
`

export const HeaderTertiary = styled.h3`
  font-size: ${defaultFontSize};
  font-weight: 700;
  text-transform: uppercase;
`

export const Paragraph = styled.p`
  font-size: ${defaultFontSize};

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`

export const Container = styled.div`
  margin: 0 -1rem;
  padding: 5rem 2rem;
`

/* Utils */
