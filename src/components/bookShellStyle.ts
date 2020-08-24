import styled from 'styled-components'
import { Container } from '../indexStyle'

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
  margin: 0 auto;
`

export const BookRecord = styled.div``

export const BookCover = styled.div`
  background-image: url('../assets/niesamowita-slowianszczyzna.png');
`

// export const BookCover = styled.img.attrs<BookImageAttrsType>({
//     src: '../assets/niesamowita-slowianszczyzna.png',
//   })<BookImageAttrsType>``

export const BookAuthor = styled.p``

export const BookTitle = styled.p``
