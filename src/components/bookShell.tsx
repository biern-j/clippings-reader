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

const clippingsKindsList = ['Note', 'ArticleClip', 'Highlight', 'Bookmark']

export const BookShell = ({ bookClippings }: Props) => {
  const [filteredClippings, setFilteredClippings] = useState<{
    clippingsItems: ClippingContent[]
    toggle: boolean
    id: string
    clippingsKind?: ClippingKind
  }>({
    clippingsItems: [],
    toggle: false,
    id: '',
  })

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

          <ButtonBox>
            {clippingsKindsList.map((kind) => (
              <ButtonYellow
                toggle={
                  filteredClippings.toggle &&
                  filteredClippings.id === book.book.title &&
                  filteredClippings.clippingsKind === kind
                }
                href="#"
                onClick={(e) => {
                  e.preventDefault
                  const highlightedClippings = getClippingsToRead(
                    kind as ClippingKind,
                    book.clippings,
                  )
                  setFilteredClippings({
                    clippingsItems: highlightedClippings,
                    toggle: !filteredClippings.toggle,
                    id: book.book.title,
                    clippingsKind: kind as ClippingKind,
                  })
                }}
              >
                {`Read ${kind}`}
              </ButtonYellow>
            ))}
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
