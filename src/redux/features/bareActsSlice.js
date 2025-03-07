import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../api/apiService";

// 📌 Fetch all Bare Acts
export const fetchBareActs = createAsyncThunk(
  "bareActs/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get("/api/bareacts");
      return response.data.acts; // Return only the acts array
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch acts");
    }
  }
);

// 📌 Fetch a specific Act’s details
export const fetchActDetails = createAsyncThunk(
  "bareActs/fetchDetails",
  async (url, { rejectWithValue }) => {
    try {
      const response = await apiService.get(
        `/api/bareacts/subacts?url=${encodeURIComponent(url)}`
      );
      return response.data.subActs; // Return the act details
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch act details"
      );
    }
  }
);
// 📌 Fetch Act Description by Slug
export const fetchActDescription = createAsyncThunk(
  "bareActs/fetchActDescription",
  async ({ slug, queryParams }, { rejectWithValue }) => {
    try {
      const response = await apiService.get(`/api/bareacts/details?slug=${slug}&queryParams=${queryParams}`);
      return { slug, details: response.data.details };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch act description");
    }
  }
);
// 📌 Create the slice
const bareActsSlice = createSlice({
  name: "bareActs",
  initialState: {
    acts: [],
    actDetails: [],
    actDetailsBySlug: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all acts
      .addCase(fetchBareActs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBareActs.fulfilled, (state, action) => {
        state.loading = false;
        state.acts = action.payload;
      })
      .addCase(fetchBareActs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch a specific act
      .addCase(fetchActDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchActDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.actDetails = action.payload;
      })
      .addCase(fetchActDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchActDescription.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchActDescription.fulfilled, (state, action) => {
        state.loading = false;
        state.actDescriptions[action.payload.slug] = action.payload.details;
      })
      .addCase(fetchActDescription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || "Failed to fetch act description";
        console.log("API Error Response:", action.payload);
      })
  },
});

export default bareActsSlice.reducer;
