import React, { useState, useEffect } from 'react'
import type { ClippingContent } from 'clippings-parser-wasm'

type PropsTypes = {
  clippings: ClippingContent[]
}

export const BookClippingsList = ({ clippings }: PropsTypes) => (
  <div className="ClippingList ul">
    <div className="Clipping li">
      {clippings.map((clipping) =>
        clipping.kind === 'Bookmark' ? clipping.location : clipping.text,
      )}
    </div>
  </div>
)
