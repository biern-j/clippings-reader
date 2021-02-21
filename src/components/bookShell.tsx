import React, { useState, useEffect, useRef } from "react";
import type { BookClippings, ParseResult } from "clippings-parser-wasm";

import {Book} from "./book"

import {
  BooksShell,
  BooksShellLabel
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
      <BooksShellLabel htmlFor="search">&nbsp;</BooksShellLabel>
      <input
        id="search"
        type="text"
        value={searchedBook}
        placeholder="Search your book's clippings"
        onChange={(e) => {
          e.preventDefault();
          setSearchedBook(e.target.value);
        }}
      />
      <div className="book-container">

      {bookClippings.map((book: BookClippings, index) => (
        <Book book={book.book} clippings={book.clippings}/>
        
      ))}
      </div>
    </BooksShell>
  );
};
