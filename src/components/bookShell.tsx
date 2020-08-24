import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";

import {
  ParseResult,
  BookClippings,
  ClippingContent,
  Location,
} from "../bookingClippingsTypes";
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
  bookClippings: BookClippings[];
  icon: IconName;
};

const icon = "coffee" as IconName;

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
            <a href="#">
              <FontAwesomeIcon icon={icon} />
            </a>
          </BookRecord>
        </BookBox>
      ))}
    </BooksShell>
  );
};
