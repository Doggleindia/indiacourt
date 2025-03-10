import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../api/apiService";

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
export const downloadResourceAsPDF = async (href) => {
  try {
    const response = await apiService.post(
      "/api/resources/downloadpdf",
      { url: href },
      { responseType: "blob" }
    );

    // Create a link to download the PDF file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(response.data);
    link.download = "document.pdf";
    link.click();
  } catch (error) {
    console.error("Error downloading PDF:", error);
  }
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
