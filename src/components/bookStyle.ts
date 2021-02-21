import styled from 'styled-components'

import {
    Container,
    HeaderPrimaryMain,
    HeaderPrimarySub,
    HeaderPrimary,
    uCenterText,
    uMarginBottomBig,
  } from "../indexStyle";

export const BookCover = styled.div`
width: 20rem;
height: 20rem;
`;
export const BookCoverImg = styled.img`
width: 100%;
object-fit: cover;
`;

export const BookBox = styled.article`
  text-align: center;
  display: flex;
  margin: 2rem 0;
  width: 50rem;
`;

export const BookRecord = styled.div`
display: flex;
flex: 1 0 80%;
margin: 1rem;
flex-direction: column;

.book-cover {
  display: flex;
  flex-direction: column;
}
`;

export const BookAuthor = styled(HeaderPrimarySub)``;

export const BookTitle = styled(HeaderPrimaryMain)``;
