import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../api/apiService"; // ✅ Ensure correct API service import

// 📌 Fetch Supreme Court Judgements (Only Fetch If Not Already Present)
export const fetchSupremeCourtJudgements = createAsyncThunk(
  "judgements/fetchSupremeCourt",
  async (_, { getState, rejectWithValue }) => {
    const { SCJudgements } = getState().judgements;
    
    if (SCJudgements.length > 0) {
      console.log("✅ Supreme Court Judgements already loaded, skipping API call.");
      return SCJudgements; // Return existing data if already available
    }

    try {
      const response = await apiService.get("/api/judgements/supremecourt");
      return response.data.judgements || []; // Ensure it's always an array
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch Supreme Court judgements");
    }
  }
);

// 📌 Fetch High Court Judgements (Only Fetch If Not Already Present)
export const fetchHighCourtJudgements = createAsyncThunk(
  "judgements/fetchHighCourt",
  async (_, { getState, rejectWithValue }) => {
    const { HCJudgements } = getState().judgements;

    if (HCJudgements.length > 0) {
      console.log("✅ High Court Judgements already loaded, skipping API call.");
      return HCJudgements; // Return existing data if already available
    }

    try {
      const response = await apiService.get("/api/judgements/highcourt");
      return response.data.judgements || []; // Ensure it's always an array
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch High Court judgements");
    }
  }
);

const judgementsSlice = createSlice({
  name: "judgements",
  initialState: {
    SCJudgements: [],
    HCJudgements: [],
    SCError: null, // ✅ Separate errors
    HCError: null,
    loading: {
      SC: false, // ✅ Separate loading states
      HC: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ✅ Supreme Court Judgements
      .addCase(fetchSupremeCourtJudgements.pending, (state) => {
        state.loading.SC = true;
        state.SCError = null;
      })
      .addCase(fetchSupremeCourtJudgements.fulfilled, (state, action) => {
        state.loading.SC = false;
        state.SCJudgements = action.payload;
      })
      .addCase(fetchSupremeCourtJudgements.rejected, (state, action) => {
        state.loading.SC = false;
        state.SCError = action.payload;
      })

      // ✅ High Court Judgements
      .addCase(fetchHighCourtJudgements.pending, (state) => {
        state.loading.HC = true;
        state.HCError = null;
      })
      .addCase(fetchHighCourtJudgements.fulfilled, (state, action) => {
        state.loading.HC = false;
        state.HCJudgements = action.payload;
      })
      .addCase(fetchHighCourtJudgements.rejected, (state, action) => {
        state.loading.HC = false;
        state.HCError = action.payload;
      });
  },
});

export default judgementsSlice.reducer;
