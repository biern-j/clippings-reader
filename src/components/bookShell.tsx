import React, { useState, useEffect } from "react";
import type {
  BookClippings,
  ParseResult,
  ClippingContent,
} from "clippings-parser-wasm";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconName } from "@fortawesome/fontawesome-common-types";

import { BookClippingsList } from "./bookClippingsList";

import { ButtonYellow } from "./buttonsStyle";

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
  // const [clippingFilter, setClippingFilter] = useState<string>("");
  const [filteredClippings, setFilteredClippings] = useState<ClippingContent[]>(
    []
  );
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
          <ButtonYellow
            href="#"
            className="btn-read-highlight"
            onClick={(e) => {
              e.preventDefault;
              const highlightedClippings = getClippingsToRead(
                "ClippingHighlight",
                book.clippings
              );
              console.log("highlightedClippings", highlightedClippings);
              setFilteredClippings(highlightedClippings);
            }}
          >
            Read highligh
          </ButtonYellow>

          <BookClippingsList clipping={book.clippings} />
        </BookBox>
      ))}
    </BooksShell>
  );
};

type ClippingKind = ClippingContent["kind"];

const getClippingsToRead = <K extends ClippingKind>(
  clickedClippingKind: K,
  bookClippings: ClippingContent[]
): Array<Extract<ClippingContent, { kind: K }>> => {
  const result = bookClippings.filter(
    (clippings) => clippings.kind === clickedClippingKind
  ) as Array<Extract<ClippingContent, { kind: K }>>;
  console.log("result", result);
  return result;
};

const kindList = ["Highligh", "Note", "Bookmark", "ArticleClip"];
