import type { BookClippings, ClippingContent } from "clippings-parser-wasm";
import React, { useState } from "react";
import { useQueryString } from "../lib/useQueryString";
import { getQueryStringValue, setQueryStringValue } from "../lib/queryString";

import {ClippingsList} from './clippingList';

import { ButtonBox } from "./bookClippingsStyle";
import { ButtonYellow } from "./buttonsStyle";

type PropsTypes = {
  chosenBook: BookClippings;
};

type ClippingKind = ClippingContent["kind"];

const clippingsKindsList: ClippingKind[] = ["Note", "Highlight"];

export const BookClippingsList = ({ chosenBook }: PropsTypes) => {
  const [filteredClippings, setFilteredClippings] = useState<{
    clippingsItems: ClippingContent[];
    toggle: boolean;
    id: string;
    clippingsKind?: ClippingKind;
  }>({
    clippingsItems: [],
    toggle: false,
    id: "",
  });
  return (
    <div>
      <ButtonBox>
        {clippingsKindsList.map((kind) => (
          <ButtonYellow
            toggle={
              filteredClippings.toggle &&
              filteredClippings.id === chosenBook.book.title &&
              filteredClippings.clippingsKind === kind
            }
            href="#popup-cliping"
            onClick={(e) => {
              e.preventDefault;
              const highlightedClippings = getClippingsToRead(
                kind,
                chosenBook.clippings
              );
              setFilteredClippings({
                clippingsItems: highlightedClippings,
                toggle: !filteredClippings.toggle,
                id: chosenBook.book.title,
                clippingsKind: kind,
              });
              setQueryStringValue("filter", `${chosenBook.book.title}-${kind}`);
            }}
          >
            {kind}
          </ButtonYellow>
        ))}
      </ButtonBox>
      <ClippingsList filteredClippings={filteredClippings.clippingsItems} />
    </div>
  );
};

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
