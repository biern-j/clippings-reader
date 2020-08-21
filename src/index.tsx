import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from './components/button'
import { BookShell } from './pages/book-shell'

import {
  ParseResult,
  BookClippings,
  ClippingContent,
  Location,
} from './bookingClippingsTypes'

const location: Location = {
  from: 23,
  to: 23,
  kind: 'Location',
}
const clippingContent: ClippingContent[] = [
  { kind: 'ClippingHighlight', location: location, text: 'test' },
  { kind: 'ClippingNote', location: location, text: 'string' },
  { kind: 'ClippingBookmark', location: location },
  { kind: 'ClippingArticleClip', location: location, text: 'string' },
]

const bookClippings = [
  {
    book: {
      title: 'title',
      author: 'author',
    },
    clippings: clippingContent,
  },
  {
    book: {
      title: 'title',
      author: 'author',
    },
    clippings: clippingContent,
  },
  {
    book: {
      title: 'title',
      author: 'author',
    },
    clippings: clippingContent,
  },
  {
    book: {
      title: 'title',
      author: 'author',
    },
    clippings: clippingContent,
  },
]

const App = () => {
  return (
    <div>
      <Button />
      <BookShell bookClippings={bookClippings} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
