import React from 'react'

import type { BookClippings, ClippingContent } from "clippings-parser-wasm";


import { ClippingList, ClippingItem } from "./clippingListStyle";

type Props = {
    filteredClippings: ClippingContent[]

}

export const ClippingsList = (props: Props) => {
    return (
        <ClippingList id="popup-cliping">
        <a href="#" className="popup__close">&times;</a>

        <div className="clipping-content">
          {props.filteredClippings.map((clipping: ClippingContent) =>
            clipping.kind === "Bookmark" ? clipping.location : <ClippingItem>{clipping.text}</ClippingItem>
          )}
        </div>
      </ClippingList>
    )
}