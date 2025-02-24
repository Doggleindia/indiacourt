import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../redux/api/apiService"; // Ensure correct API service import

// ✅ Fetch all articles
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get("/api/articles"); // API call
      return response.data.articles; // Extract articles from response
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ Fetch single article by ID
export const fetchArticleById = createAsyncThunk(
  "articles/fetchArticleById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await apiService.get(`/api/articles/${id}`); // API call with ID
      return response.data; // Return full article data
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ Fetch recommended articles (Category & Limit)
export const fetchRecommendedArticles = createAsyncThunk(
    "articles/fetchRecommendedArticles",
    async (_, { rejectWithValue }) => {
      try {
        const response = await apiService.get(`/api/articles/?category=Legal&limit=3`);
        return response.data.articles; // Extract recommended articles
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );
  

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    article: null, // Store single article
    recommendedArticles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.article = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchRecommendedArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecommendedArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendedArticles = action.payload;
      })
      .addCase(fetchRecommendedArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default articlesSlice.reducer;
