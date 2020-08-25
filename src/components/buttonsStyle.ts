import styled from "styled-components";
import {
  colorBlack,
  colorWhite,
  colorPrimary,
  defaultFontSize,
} from "../indexStyle";

export const Button = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(${colorBlack}, 0.2);

    &::after {
      background-color: ${colorWhite};
      transform: scaleX(1.4) scaleY(1.6);
    }
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(${colorBlack}, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 10rem;
    transition: all 0.4s;
  }
`;

export const ButtonText = styled.a`
  &:link,
  &:visited {
    color: ${colorPrimary};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid ${colorPrimary};
    padding: 3px;
    font-size: ${defaultFontSize};
    transition: all 0.2s;
  }
  &:hover {
    background-color: ${colorPrimary};
    color: ${colorWhite};
    box-shadow: 0 1rem 2rem rgba(${colorBlack}, 0.15);
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: 0 0.5rem 2rem rgba(${colorBlack}, 0.15);
    transform: translateY(0);
  }
`;

export const ButtonYellow = styled(Button)`
  background-color: ${colorPrimary};
  color: ${colorWhite};

  &::after {
    color: ${colorPrimary};
  }
`;
