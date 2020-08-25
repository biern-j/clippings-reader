// import React from "react";
// import { ButtonYellow } from "./buttonsStyle";
// import type {
//   BookClippings,
//   ParseResult,
//   ClippingContent,
// } from "clippings-parser-wasm";

// type ButtonType = {
//   book: BookClippings;
//   getClippingsToRead: (
//     clickedClippingKind: string,
//     bookClippings: ClippingContent[]
//   ) => void;
//   setFilteredClippings: ClippingContent[];
//   label: string;
// };

// export const Button = ({
//   book,
//   getClippingsToRead,
//   setFilteredClippings,
//   label,
// }: ButtonType) => (
//   <ButtonYellow
//     href="#"
//     className="btn-read-highlight"
//     onClick={(e) => {
//       e.preventDefault;
//       const highlightedClippings = getClippingsToRead(
//         "ClippingHighlight",
//         book.clippings
//       );
//       setFilteredClippings(highlightedClippings);
//     }}
//   >
//     {label}
//   </ButtonYellow>
// );
