import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 📌 Fetch Rajya Sabha Bills latest
export const fetchLatestRajyaSabhaBills = createAsyncThunk(
  "bills/fetchLatestRajyaSabhaBills",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.allorigins.win/raw?url=https://sansad.in/api_rs/ppHome/latestUpdates");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch rajya sabha bills");
    }
  }
);

// 📌 Fetch Lok Sabha Bills latest
export const fetchLatestLokSabhaBills = createAsyncThunk(
  "bills/fetchLatestLokSabhaBills",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.allorigins.win/raw?url=https://sansad.in/api_ls/ppHome/Updates?locale=en");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch lok sabha bills");
    }
  }
);

const billsSlice = createSlice({
  name: "bills",
  initialState: {
    rajyaSabhaBills: [],
    lokSabhaBills: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestRajyaSabhaBills.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLatestRajyaSabhaBills.fulfilled, (state, action) => {
        state.loading = false;
        state.rajyaSabhaBills = action.payload;
      })
      .addCase(fetchLatestRajyaSabhaBills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchLatestLokSabhaBills.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLatestLokSabhaBills.fulfilled, (state, action) => {
        state.loading = false;
        state.lokSabhaBills = action.payload;
      })
      .addCase(fetchLatestLokSabhaBills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default billsSlice.reducer;
