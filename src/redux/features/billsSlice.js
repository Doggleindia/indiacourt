import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 📌 Fetch Rajya Sabha Bills latest
export const fetchLatestRajyaSabhaBills = createAsyncThunk(
  "bills/fetchLatestRajyaSabhaBills",
  async (_, { getState, rejectWithValue }) => {
    const { RS } = getState().bills;

    if (RS.bills.length > 0) {
      console.log("✅ Rajya Sabha Bills already loaded, skipping API call.");
      return RS.bills; // Return existing data if already available
    }

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
  async (_, { getState, rejectWithValue }) => {
    const { LS } = getState().bills;

    if (LS.bills.length > 0) {
      console.log("✅ Lok Sabha Bills already loaded, skipping API call.");
      return LS.bills; // Return existing data if already available
    }

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
    RS: {
      bills: [],
      loading: false,
      error: null,
    },
    LS: {
      bills: [],
      loading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ✅ Rajya Sabha Bills
      .addCase(fetchLatestRajyaSabhaBills.pending, (state) => {
        state.RS.loading = true;
        state.RS.error = null;
      })
      .addCase(fetchLatestRajyaSabhaBills.fulfilled, (state, action) => {
        state.RS.loading = false;
        state.RS.bills = action.payload;
      })
      .addCase(fetchLatestRajyaSabhaBills.rejected, (state, action) => {
        state.RS.loading = false;
        state.RS.error = action.payload;
      })

      // ✅ Lok Sabha Bills
      .addCase(fetchLatestLokSabhaBills.pending, (state) => {
        state.LS.loading = true;
        state.LS.error = null;
      })
      .addCase(fetchLatestLokSabhaBills.fulfilled, (state, action) => {
        state.LS.loading = false;
        state.LS.bills = action.payload;
      })
      .addCase(fetchLatestLokSabhaBills.rejected, (state, action) => {
        state.LS.loading = false;
        state.LS.error = action.payload;
      });
  },
});

export default billsSlice.reducer;
