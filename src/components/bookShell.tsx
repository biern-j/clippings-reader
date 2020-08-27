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
  ButtonBox
} from './bookShellStyle'

type Props = {
  bookClippings: ParseResult
}
type ClippingKind = ClippingContent['kind']

const clippingsKindsList = ['Highligh', 'Note', 'ArticleClip']

export const BookShell = ({ bookClippings }: Props) => {
  const [filteredClippings, setFilteredClippings] = useState<
    Array<{
      clippingsItems: ClippingContent[]
      toggle: boolean
      id: string
    }>
  >([{ clippingsItems: [], toggle: false, id: '' }])
  return (
    <BooksShell>
      {bookClippings.map((book: BookClippings, index) => (
        <BookBox>
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
              const notedClippings = getClippingsToRead('Note', book.clippings)
              setFilteredClippings([
                ...filteredClippings,
                {
                  clippingsItems: notedClippings,
                  toggle: true,
                  id: `${notedClippings}-${index}`,
                },
              ])
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
              setFilteredClippings([
                ...filteredClippings,
                {
                  clippingsItems: highlightedClippings,
                  toggle: true,
                  id: `${highlightedClippings}-${index}`,
                },
              ])
            }}
          >
            Read highligh
          </ButtonYellow>
          <ButtonOrange
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
                  toggle: true,
                  id: `${articleClip}-${index}`,
                },
              ])
            }}
          >
            Read article
          </ButtonOrange>
          </ButtonBox>
          {filteredClippings.map(
            (item) =>
              item.toggle && (
                <BookClippingsList clippings={item.clippingsItems} />
              ),
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
