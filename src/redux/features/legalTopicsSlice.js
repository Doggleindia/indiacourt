import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../redux/api/apiService"; // Axios instance

// Async thunk to fetch legal topics data
export const fetchLegalTopics = createAsyncThunk(
  "legalTopics/fetchLegalTopics",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get("/legal-topics");
      return response.data.topics;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const legalTopicsSlice = createSlice({
  name: "legalTopics",
  initialState: {
    topics: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLegalTopics.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLegalTopics.fulfilled, (state, action) => {
        state.loading = false;
        state.topics = action.payload;
      })
      .addCase(fetchLegalTopics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default legalTopicsSlice.reducer;
