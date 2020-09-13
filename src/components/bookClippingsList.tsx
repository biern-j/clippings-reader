import React, { useState, useEffect } from "react";
import type { ClippingContent, BookClippings } from "clippings-parser-wasm";

import { ButtonBox } from "./bookShellStyle";
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
            href="#"
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
            }}
          >
            {`Read ${kind}`}
          </ButtonYellow>
        ))}
      </ButtonBox>

      <div className="ClippingList ul">
        <div className="Clipping li">
          {/* {filteredClippings.clippingsItems.filter(
            (item) => item.kind === "Highlight"
          )} */}
          {filteredClippings.clippingsItems.map((clipping) =>
            clipping.kind === "Bookmark" ? clipping.location : clipping.text
          )}
        </div>
      </div>
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
