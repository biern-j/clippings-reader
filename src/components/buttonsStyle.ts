import styled from 'styled-components'
import {
  colorBlack,
  colorWhite,
  colorPrimary,
  colorSecondary,
  colorTertiary,
  defaultFontSize,
} from '../indexStyle'

export const Button = styled.a`
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.5rem;
    display: inline-block;
    position: relative;
    margin: 1rem;
    font-weight: 700;
  }

  &:hover {
    box-shadow: 0 1rem 2rem rgba(${colorBlack}, 0.2);
  }
`

export const ButtonText = styled.a`
  &:link,
  &:visited {
    color: ${colorPrimary};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid ${colorPrimary};
    padding: 3px;
    font-size: ${defaultFontSize};
  }
  &:hover {
    background-color: ${colorPrimary};
    color: ${colorWhite};
    box-shadow: 0 1rem 2rem rgba(${colorBlack}, 0.15);
  }
  &:active {
    box-shadow: 0 0.5rem 2rem rgba(${colorBlack}, 0.15);
  }
`

export const ButtonYellow = styled(Button)<{ toggle: boolean }>`
  color: ${colorWhite};
  background-color: ${({ toggle }) => (toggle ? colorSecondary : colorPrimary)};

  &:hover {
    background-color: ${colorSecondary};
    box-shadow: 0 1rem 2rem rgba(${colorBlack}, 0.15);
  }
`

export const ButtonBlue = styled(Button)`
  background-color: ${colorSecondary};
  color: ${colorWhite};

  &:hover {
    background-color: ${colorSecondary};
    color: ${colorBlack};
    box-shadow: 0 1rem 2rem rgba(${colorBlack}, 0.15);
  }
  &:active {
    box-shadow: 0 0.5rem 2rem rgba(${colorBlack}, 0.15);
  }
`
export const ButtonOrange = styled(Button)`
  background-color: ${colorTertiary};
  color: ${colorWhite};

  &:hover {
    background-color: ${colorTertiary};
    color: ${colorBlack};
    box-shadow: 0 1rem 2rem rgba(${colorBlack}, 0.15);
  }
  &:active {
    box-shadow: 0 0.5rem 2rem rgba(${colorBlack}, 0.15);
  }
`
