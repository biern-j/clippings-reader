import React, { useState, useEffect } from 'react'
import type {
  BookClippings,
  ParseResult,
  ClippingContent,
} from 'clippings-parser-wasm'

import { BookClippingsList } from './bookClippingsList'

import { ButtonYellow, ButtonBlue, ButtonOrange } from './buttonsStyle'

import {
  BooksShell,
  BookBox,
  BookRecord,
  BookCover,
  BookHeaderBox,
  BookHeader,
  BookTitle,
  BookAuthor,
  ButtonBox,
} from './bookShellStyle'

type Props = {
  bookClippings: ParseResult
}
type ClippingKind = ClippingContent['kind']

const clippingsKindsList = ['Highligh', 'Note', 'ArticleClip']

export const BookShell = ({ bookClippings }: Props) => {
  const [filteredClippings, setFilteredClippings] = useState<{
    clippingsItems: ClippingContent[]
    toggle: boolean
    id: string
  }>({ clippingsItems: [], toggle: false, id: '' })
  const toggledBook = (bookId: string) => filteredClippings.id === bookId
  return (
    <BooksShell>
      {bookClippings.map((book: BookClippings, index) => (
        <BookBox key={`${book.book.title}`}>
          <BookRecord>
            <BookHeaderBox>
              <BookHeader>
                <BookTitle>{book.book.title}</BookTitle>
                <BookAuthor>{book.book.author}</BookAuthor>
              </BookHeader>
            </BookHeaderBox>
            <a href="#">{/* <FontAwesomeIcon icon={icon} /> */}</a>
          </BookRecord>
          {/* {clippingsKindsList.map((kind: `${kind}`) => (
            <ButtonYellow
              href="#"
              onClick={(e) => {
                e.preventDefault
                const highlightedClippings = getClippingsToRead(
                  kind,
                  book.clippings,
                )
                setFilteredClippings(highlightedClippings)
              }}
            >
              Read `${kind}`
            </ButtonYellow>
          ))}
          */}
          <ButtonBox>
            <ButtonBlue
              href="#"
              className="btn-read-notes"
              onClick={(e) => {
                e.preventDefault
                const notedClippings = getClippingsToRead(
                  'Note',
                  book.clippings,
                )
                const bookToToggle = toggledBook(book.book.title)
                setFilteredClippings({
                  clippingsItems: notedClippings,
                  toggle: !filteredClippings.toggle,
                  id: book.book.title,
                })
              }}
            >
              Read note
            </ButtonBlue>
            <ButtonYellow
              href="#"
              className="btn-read-highlight"
              onClick={(e) => {
                e.preventDefault
                const highlightedClippings = getClippingsToRead(
                  'Highlight',
                  book.clippings,
                )
                const bookToToggle = toggledBook(book.book.title)
                setFilteredClippings({
                  clippingsItems: highlightedClippings,
                  toggle: !filteredClippings.toggle,
                  id: book.book.title,
                })
              }}
            >
              Read highligh
            </ButtonYellow>
            {/* <ButtonOrange
              href="#"
              className="btn-read-articleClip"
              onClick={(e) => {
                e.preventDefault
                const articleClip = getClippingsToRead(
                  'ArticleClip',
                  book.clippings,
                )

                setFilteredClippings([
                  ...filteredClippings,
                  {
                    clippingsItems: articleClip,
                    toggle: !toggledBook(book.book.title)[0].toggle,
                    id: book.book.title,
                  },
                ])
              }}
            >
              Read article
            </ButtonOrange> */}
          </ButtonBox>
          {filteredClippings.toggle &&
            filteredClippings.id === book.book.title && (
              <BookClippingsList clippings={filteredClippings.clippingsItems} />
            )}
        </BookBox>
      ))}
    </BooksShell>
  )
}

const getClippingsToRead = <K extends ClippingKind>(
  clickedClippingKind: K,
  bookClippings: ClippingContent[],
): Array<Extract<ClippingContent, { kind: K }>> => {
  const result = bookClippings.filter(
    (clippings) => clippings.kind === clickedClippingKind,
  ) as Array<Extract<ClippingContent, { kind: K }>>
  console.log('result', result)
  return result
}
