import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../redux/api/apiService"; // Axios instance

// Fetch books from API
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await apiService.get("/api/books");
  return response.data.books; // API returns { books: [...] }
});

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
