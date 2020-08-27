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
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    position: relative;
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

export const ButtonYellow = styled(Button)`
  background-color: ${colorPrimary};
  color: ${colorWhite};

  &:hover {
    background-color: ${colorPrimary};
    color: ${colorBlack};
    box-shadow: 0 1rem 2rem rgba(${colorBlack}, 0.15);
  }
  &:active {
    box-shadow: 0 0.5rem 2rem rgba(${colorBlack}, 0.15);
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
