import styled from "styled-components";
import {
  Container,
  HeaderPrimaryMain,
  HeaderPrimarySub,
  HeaderPrimary,
  uCenterText,
  uMarginBottomBig,
} from "../indexStyle";

export const BooksShell = styled.section`
  display: flex;
  justify-content: center;
  align-content: space-evenly;
  flex-direction: column;
`;

export const BookBox = styled.article`
  height: 50rem;
  text-align: center;
`;

export const BookRecord = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
export const BookHeaderBox = styled.header`
  ${uCenterText};
  ${uMarginBottomBig};
`;
export const BookHeader = styled(HeaderPrimary)``;
export const BookAuthor = styled(HeaderPrimarySub)``;

export const BookTitle = styled(HeaderPrimaryMain)``;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
