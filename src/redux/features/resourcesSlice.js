import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../api/apiService";
import { jsPDF } from "jspdf";

// 📌 Fetch all resources
export const fetchResources = createAsyncThunk(
  "resources/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get("/api/resources");
      return response.data.resources;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch resources");
    }
  }
);

// 📌 Fetch resource details
export const fetchResourceDetails = createAsyncThunk(
  "resources/fetchDetails",
  async (url, { rejectWithValue }) => {
    try {
      const response = await apiService.get(`/api/resources/details?url=${encodeURIComponent(url)}`);
      return { url, details: response.data.details };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch resource details");
    }
  }
);

// 📌 Download resource details as PDF
export const downloadResourceAsPDF = (title, details) => {
  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.text(title, 10, 10);
  
  let y = 20;
  details.forEach((line, index) => {
    if (y > 280) {
      doc.addPage();
      y = 10;
    }
    doc.text(line, 10, y);
    y += 10;
  });

  doc.save(`${title}.pdf`);
};

const resourcesSlice = createSlice({
  name: "resources",
  initialState: {
    resources: [],
    resourceDetails: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all resources
      .addCase(fetchResources.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.loading = false;
        state.resources = action.payload;
      })
      .addCase(fetchResources.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch specific resource details
      .addCase(fetchResourceDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResourceDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.resourceDetails[action.payload.url] = action.payload.details;
      })
      .addCase(fetchResourceDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default resourcesSlice.reducer;
