import React, { useState, useEffect } from "react";
import type { ClippingContent } from "clippings-parser-wasm";

type Props = {
  clipping: ClippingContent[];
};

export const BookClippingsList = ({ clipping }: Props) => (
  <div className="ClippingList ul">
    <div className="Clipping li">{}</div>
  </div>
);
