import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import type { ParseResult, BookClippings } from "clippings-parser-wasm";

import { Button } from "./components/button";
import { BookShell } from "./components/bookShell";
import { GlobalStyle } from "./indexStyle";

const wasm_mod = import("clippings-parser-wasm");

async function parse(input: string) {
  return wasm_mod.then((mod) => mod.parse(input));
}

const App = () => {
  const [books, setBooks] = useState<BookClippings[] | undefined>(undefined);
  useEffect(() => {
    parse(sampleClippingsTxt).then((books) => setBooks(books));
  }, []);

  console.log({ books });

  return (
    <div>
      {books ? <BookShell bookClippings={books} /> : "Loading"}

      <GlobalStyle />
    </div>
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
