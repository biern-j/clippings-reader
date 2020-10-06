import React, { useState, useEffect, useRef } from "react";
import type { BookClippings, ParseResult } from "clippings-parser-wasm";

import { BookClippingsList } from "./bookClippingsList";

import {
  BooksShell,
  BookBox,
  BookRecord,
  BookHeaderBox,
  BookHeader,
  BookTitle,
  BookAuthor,
} from "./bookShellStyle";

type Props = {
  bookClippings: ParseResult;
};

const useDebounce = (searchedBook: string, searchBook: any) => {
  const timerId = useRef<number | undefined>();
  useEffect(() => {
    clearTimeout(timerId.current);

    timerId.current = setTimeout(() => {
      searchBook(searchedBook);
    }, 500);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [searchedBook]);
};

export const BookShell = ({ bookClippings }: Props) => {
  const [toggledBookTitle, setBookToggle] = useState("");
  const [searchedBook, setSearchedBook] = useState("");
  const [foundBook, setFoundBook] = useState<BookClippings | null>();

  const searchBook = (userPhrase: string) => {
    setFoundBook(
      bookClippings.find((book) => book.book.title.includes(userPhrase))
    );
  };

  useDebounce(searchedBook, searchBook);

  return (
    <BooksShell>
      <label htmlFor="search">&nbsp;</label>
      <input
        id="search"
        type="text"
        value={searchedBook}
        onChange={(e) => {
          e.preventDefault();
          setSearchedBook(e.target.value);
        }}
      />

      {bookClippings.map((book: BookClippings, index) => (
        <BookBox key={`${book.book.title}`}>
          <BookRecord
            onClick={(e) => {
              e.preventDefault();
              setBookToggle(book.book.title);
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
