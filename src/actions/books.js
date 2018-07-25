import {normalize} from 'normalizr'
import api from "../api";
import {BOOKS_FETCHED} from '../types'
import {bookSchema} from '../schemas'

//data.entities.books
const booksFetched = data => ({type: BOOKS_FETCHED, data})

export const fetchBooks = data => () => api
  .books
  .fetchBooks(data)
  .then(books => books);

export const fetchPages = data => () => api
  .books
  .fetchPages(data)
  .then(pages => pages);

export const fetchShelf = data => (dispatch) => api
  .books
  .fetchShelf(data)
  .then(books => dispatch(booksFetched(normalize(books, [bookSchema]))));