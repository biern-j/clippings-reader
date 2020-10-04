import type { BookClippings, ClippingContent } from "clippings-parser-wasm";
import React, { useState } from "react";
import { useQueryString } from "../lib/useQueryString";
import { ButtonBox } from "./bookShellStyle";
import { ButtonYellow } from "./buttonsStyle";

type PropsTypes = {
  chosenBook: BookClippings;
};

type ClippingKind = ClippingContent["kind"];

const clippingsKindsList: ClippingKind[] = ["Note", "Highlight"];

export const BookClippingsList = ({ chosenBook }: PropsTypes) => {
  // const filterFromUrl: ClippingKind = clippingsKindsList.include(
  //   getQueryStringValue("?filter")
  // );
  // console.log("filterFromUrl", filterFromUrl);
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
              const filterFromUrl = useQueryString("filter", kind);
              console.log("filterFromUrl", filterFromUrl);
            }}
          >
            {`Read ${kind}`}
          </ButtonYellow>
        ))}
      </ButtonBox>

      <div className="ClippingList ul">
        <div className="Clipping li">
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
