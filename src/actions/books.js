import api from "../api";

export const fetchBooks = data => () =>
  api.books.fetchBooks(data).then(books => books);
