import React from 'react'
import {
  ParseResult,
  BookClippings,
  ClippingContent,
  Location,
} from '../bookingClippingsTypes'
import {
  BooksShell,
  BookBox,
  BookRecord,
  BookCover,
  BookTitle,
  BookAuthor,
} from './bookShellStyle'

// search box
// book list

type BookShellProps = BookClippings[]

export const BookShell = ({ bookClippings }: any) => {
  return (
    <BooksShell>
      {bookClippings.map((book: BookClippings) => (
        <BookBox>
          <BookRecord>
            <BookCover>&nbsp;</BookCover>
            <BookTitle>{book.book.title}</BookTitle>
            <BookAuthor>{book.book.title}</BookAuthor>

            <a href="#" className="btn btn--white">
              Read Notes
            </a>
          </BookRecord>
        </BookBox>
      ))}
    </BooksShell>
  )
}
