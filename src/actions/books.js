import api from "../api";

export const fetchBooks = data => () =>
  api.books.fetchBooks(data).then(books => books);

export const fetchPages = data => () =>
  api.books.fetchPages(data).then(pages => pages);
