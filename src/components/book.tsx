import React, { useState, useEffect, useRef } from "react";

import { BookClippingsList } from "./bookClippingsList";
import type { BookClippings, ParseResult } from "clippings-parser-wasm";

import {
  BookCover,
  BookBox,
  BookRecord,
  BookTitle,
  BookAuthor,
  BookCoverImg
} from "./bookStyle";

export const Book = (props: BookClippings) => {
  const [toggledBookTitle, setBookToggle] = useState("");

  return (
      <>
    <BookBox>
      <BookCover >
          <BookCoverImg src="./src/assets/niesamowita-slowianszczyzna.jpg"/>
      </BookCover>
      <BookRecord>
        <div className="book-cover">
        <BookTitle>{props.book.title}</BookTitle>
        <BookAuthor>{props.book.author}</BookAuthor>
        </div>
        <BookClippingsList chosenBook={props} />

      </BookRecord>
    </BookBox>
    
      </>
  );
};
