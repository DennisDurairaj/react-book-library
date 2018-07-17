import api from "../api";

export const fetchBooks = data => () => api.user.fetchBooks(data);
