import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../api/apiService"; // ✅ Ensure correct API service import

// 📌 Fetch Supreme Court Judgements (Only Fetch If Not Already Present)
export const fetchSupremeCourtJudgements = createAsyncThunk(
  "judgements/fetchSupremeCourt",
  async (_, { getState, rejectWithValue }) => {
    const { SC } = getState().judgements;
    
    if (SC.judgements.length > 0) {
      console.log("✅ Supreme Court Judgements already loaded, skipping API call.");
      return SC.judgements; // Return existing data if already available
    }

    try {
      const response = await apiService.get("/api/judgements/supremecourt");
      return response.data.judgements || []; // Ensure it's always an array
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to fetch Supreme Court judgements");
    }
  }
);

// 📌 Fetch High Court Judgements (Only Fetch If Not Already Present)
export const fetchHighCourtJudgements = createAsyncThunk(
  "judgements/fetchHighCourt",
  async (_, { getState, rejectWithValue }) => {
    const { HC } = getState().judgements;

    if (HC.judgements.length > 0) {
      console.log("✅ High Court Judgements already loaded, skipping API call.");
      return HC.judgements; // Return existing data if already available
    }

    try {
      const response = await apiService.get("/api/judgements/highcourt");
      return response.data.judgements || []; // Ensure it's always an array
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to fetch High Court judgements");
    }
  }
);

const judgementsSlice = createSlice({
  name: "judgements",
  initialState: {
    // ✅ Separate HC & SC
    SC: {
      judgements: [],
      error: null,
      loading: false,
    },
    HC: {
      judgements: [],
      error: null,
      loading: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ✅ Supreme Court Judgements
      .addCase(fetchSupremeCourtJudgements.pending, (state) => {
        state.SC.loading = true;
        state.SC.error = null;
      })
      .addCase(fetchSupremeCourtJudgements.fulfilled, (state, action) => {
        state.SC.loading = false;
        state.SC.judgements = action.payload;
      })
      .addCase(fetchSupremeCourtJudgements.rejected, (state, action) => {
        state.SC.loading = false;
        state.SC.error = action.payload;
      })

      // ✅ High Court Judgements
      .addCase(fetchHighCourtJudgements.pending, (state) => {
        state.HC.loading = true;
        state.HC.error = null;
      })
      .addCase(fetchHighCourtJudgements.fulfilled, (state, action) => {
        state.HC.loading = false;
        state.HC.judgements = action.payload;
      })
      .addCase(fetchHighCourtJudgements.rejected, (state, action) => {
        state.HC.loading = false;
        state.HC.error = action.payload;
      });
  },
});

export default judgementsSlice.reducer;
