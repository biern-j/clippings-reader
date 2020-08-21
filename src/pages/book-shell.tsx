import React from 'react'
import {
  ParseResult,
  BookClippings,
  ClippingContent,
  Location,
} from '../bookingClippingsTypes'

// search box
// book list

type BookShellProps = BookClippings[]

export const BookShell = ({ bookClippings }: any) => {
  return (
    <div>
      {/* container */}
      {bookClippings.map((book: BookClippings) => (
        <div>{book.book.title}</div>
      ))}
    </div>
  )
}
