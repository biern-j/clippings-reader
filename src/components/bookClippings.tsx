import React from "react";
import type { ClippingContent } from "clippings-parser-wasm";

type Props = {
  clipping: ClippingContent[];
};

export const BookClippings = ({ clipping }: Props) => (
  <div className="ClippingList ul">
    <div className="Clipping li">{}</div>
  </div>
);
