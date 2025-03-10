import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../api/apiService"; // ✅ Ensure correct API service import

// 📌 Fetch Supreme Court Judgements
export const fetchSupremeCourtJudgements = createAsyncThunk(
  "judgements/fetchSupremeCourt",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get("/api/judgements/supremecourt");
      return response.data.judgements; // ✅ Return only the array of judgements
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch judgements");
    }
  }
);

// 📌 Fetch High Court Judgements
export const fetchHighCourtJudgements = createAsyncThunk(
  "judgements/fetchHighCourt",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get("/api/judgements/highcourt");
      return response.data.judgements; // ✅ Return only the array of judgements
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch high court judgements"
      );
    }
  }
);

const judgementsSlice = createSlice({
  name: "judgements",
  initialState: {
    SCJudgements: [],
    HCJudgements: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupremeCourtJudgements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSupremeCourtJudgements.fulfilled, (state, action) => {
        state.loading = false;
        state.SCJudgements = action.payload;
      })
      .addCase(fetchSupremeCourtJudgements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchHighCourtJudgements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHighCourtJudgements.fulfilled, (state, action) => {
        state.loading = false;
        state.HCJudgements = action.payload;
      })
      .addCase(fetchHighCourtJudgements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default judgementsSlice.reducer;
