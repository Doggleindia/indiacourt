import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../redux/api/apiService";

// Async thunk for fetching helpline data
export const fetchHelpline = createAsyncThunk(
  "helpline/fetchHelpline",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get("/api/helplines");
      return response.data.gethelpline; // Ensure correct key
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const helplineSlice = createSlice({
  name: "helpline",
  initialState: {
    helpline: [],
    loading: false,
    error: null,
  },
  reducers: {}, // ✅ Keep reducers empty if no sync actions are needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchHelpline.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHelpline.fulfilled, (state, action) => {
        state.loading = false;
        state.helpline = action.payload;
      })
      .addCase(fetchHelpline.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default helplineSlice.reducer; // ✅ Correct Export
