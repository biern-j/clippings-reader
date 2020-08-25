import React from "react";
import type { BookClippings, ParseResult } from "clippings-parser-wasm";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconName } from "@fortawesome/fontawesome-common-types";

import {
  BooksShell,
  BookBox,
  BookRecord,
  BookCover,
  BookHeaderBox,
  BookHeader,
  BookTitle,
  BookAuthor,
} from "./bookShellStyle";

type Props = {
  bookClippings: ParseResult;
  // icon: IconName;
};

// const icon = "coffee" as IconName;

export const BookShell = ({ bookClippings }: Props) => {
  return (
    <BooksShell>
      {bookClippings.map((book: BookClippings) => (
        <BookBox>
          <BookRecord>
            <BookHeaderBox>
              <BookHeader>
                <BookTitle>{book.book.title}</BookTitle>
                <BookAuthor>{book.book.title}</BookAuthor>
              </BookHeader>
            </BookHeaderBox>
            <a href="#">{/* <FontAwesomeIcon icon={icon} /> */}</a>
          </BookRecord>
          {/* <BookClippings /> */}
        </BookBox>
      ))}
    </BooksShell>
  );
};
