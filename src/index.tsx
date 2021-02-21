import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import type { ParseResult, BookClippings } from "clippings-parser-wasm";

import { BookShell } from "./components/bookShell";
import { GlobalStyle, HeaderPrimary, HeaderContainer } from "./indexStyle";

import { BookClippingsList } from "./components/bookClippingsList";

import { setQueryStringValue, getQueryStringValue } from "./lib/queryString";

const textTest = require("./sample.txt");
const wasm_mod = import("clippings-parser-wasm");

async function parse(input: string) {
  return wasm_mod.then((mod) => mod.parse(input));
}

const App = () => {
  const [books, setBooks] = useState<BookClippings[] | undefined>(undefined);
  useEffect(() => {
    const getBooks = async () => {
      const result = await parse(textTest.default);
      console.log("test");

      setBooks(result);
    };
    getBooks();
  }, []);

  const queryFilterValue = getQueryStringValue("?filter");
  console.log("queryFilterValue", queryFilterValue);

  // const onButtonClick = async (files: FileList) => {
  //   const text = await files[0].text();

  //   const parsedText = await parse(textTest.default);
  //   console.log(
  //     "text",
  //     text,
  //     "parsedText",
  //     parsedText,
  //     "textTest",
  //     textTest.default
  //   );
  //   setBooks(parsedText);
  // };

  return (
    <>
    <HeaderContainer ><HeaderPrimary>My clippings</HeaderPrimary></HeaderContainer>
      {/* reset  */}
      {/* <label htmlFor="file">&nbsp;</label>
      <input
        id="file"
        type="file"
        onChange={(e) => {
          e.preventDefault();
          onButtonClick(e.target.files!);
        }}
      />*/}
      {/* {books ? <BookShell bookClippings={books} /> : "Loading"} */}
      {queryFilterValue ? (
        <div>
          {books
            ? books
                .find(
                  (book) =>
                    `${book.book.title}-Highlight` === queryFilterValue ||
                    `${book.book.title}-Note` === queryFilterValue
                )
                ?.clippings.map((clipping) =>
                  clipping.kind === "Bookmark"
                    ? clipping.location
                    : clipping.text
                )
            : "loading"}
        </div>
      ) : books ? (
        <BookShell bookClippings={books} />
      ) : (
        "Loading"
      )}
      <GlobalStyle />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

const sampleClippingsTxt = `Book 1 (Author X)\r
- Your Highlight at location 1-100 | Added on Sunday, 12 July 2015 17:36:17\r
\r
Book 1 highlight 1 content.\r
==========\r
Book 1 (Author X)\r
- Your Highlight at location 2-200 | Added on Sunday, 12 July 2015 17:36:17\r
\r
Book 1 highlight 2 content.\r
==========\r
Book 2 (Author Y)\r
- Your Highlight at location 2-200 | Added on Sunday, 12 July 2015 17:36:17\r
\r
Book 2 highlight 2 content.\r
==========\r
`;
