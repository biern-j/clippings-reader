import React, { useState, useEffect } from "react";
import type {
  BookClippings,
  ParseResult,
  ClippingContent,
} from "clippings-parser-wasm";

import { BookClippingsList } from "./bookClippingsList";

import {
  BooksShell,
  BookBox,
  BookRecord,
  BookHeaderBox,
  BookHeader,
  BookTitle,
  BookAuthor,
  ButtonBox,
} from "./bookShellStyle";

type Props = {
  bookClippings: ParseResult;
};

export const BookShell = ({ bookClippings }: Props) => {
  const [toggledBookTitle, onBookToggle] = useState<string>("");
  return (
    <BooksShell>
      <label htmlFor="search">&nbsp;</label>
      <input id="search" type="text" />
      <input type="submit" name="submit" value="Submit Search" />

      {bookClippings.map((book: BookClippings, index) => (
        <BookBox key={`${book.book.title}`}>
          <BookRecord
            onClick={(e) => {
              e.preventDefault();
              onBookToggle(book.book.title);
            }}
          >
            <BookHeaderBox>
              <BookHeader>
                <BookTitle>{book.book.title}</BookTitle>
                <BookAuthor>{book.book.author}</BookAuthor>
              </BookHeader>
            </BookHeaderBox>
          </BookRecord>
          {book.book.title === toggledBookTitle && (
            <BookClippingsList chosenBook={book} />
          )}
        </BookBox>
      ))}
    </BooksShell>
  );
};
