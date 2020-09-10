import styled from 'styled-components'
import {
  Container,
  HeaderPrimaryMain,
  HeaderPrimarySub,
  HeaderPrimary,
  uCenterText,
  uMarginBottomBig,
} from '../indexStyle'

type BookImageAttrsType = {
  src: string
}
export const BooksShell = styled(Container)`
  display: flex;
  justify-content: center;
  align-content: space-evenly;
  flex-direction: column;
`

export const BookBox = styled.div`
  height: 50rem;
  text-align: center;
`

export const BookRecord = styled.div``

export const BookCover = styled.div`
  background-image: url('../src/assets/niesamowita-slowianszczyzna.png');
  background-size: cover;
  width: 100%;
  height: 45rem;
`

/*export const BookCover = styled.img.attrs <BookImageAttrsType>(
  { src: "../src/assets/niesamowita-slowianszczyzna.png" })
<BookImageAttrsType>``; */

export const BookHeaderBox = styled.div`
  ${uCenterText};
  ${uMarginBottomBig};
`
export const BookHeader = styled(HeaderPrimary)``
export const BookAuthor = styled(HeaderPrimarySub)``

export const BookTitle = styled(HeaderPrimaryMain)``

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
