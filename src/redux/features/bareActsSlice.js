import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 📌 Fetch all Bare Acts
export const fetchBareActs = createAsyncThunk("bareActs/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:5500/api/bareacts"); 
    return response.data.acts; // Return only the acts array
  } catch (error) {
    return rejectWithValue(error.response?.data || "Failed to fetch acts");
  }
});

// 📌 Fetch a specific Act’s details
export const fetchActDetails = createAsyncThunk("bareActs/fetchDetails", async (url, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:5500/api/bareacts/subacts?url=${encodeURIComponent(url)}`); 
    return response.data.subActs; // Return the act details
  } catch (error) {
    return rejectWithValue(error.response?.data || "Failed to fetch act details");
  }
});

// 📌 Create the slice
const bareActsSlice = createSlice({
  name: "bareActs",
  initialState: {
    acts: [],
    actDetails: [],
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
      });
  },
});

export default bareActsSlice.reducer;
