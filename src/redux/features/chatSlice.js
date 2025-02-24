import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../redux/api/apiService"; // Ensure correct API service import

// ✅ Send message to chatbot API
export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (message, { rejectWithValue }) => {
    try {
      const response = await apiService.post("/api/chat", { message });
      console.log("API Response:", response.data); // Debugging
      return response.data; // ✅ Directly return the API response
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [], // Chat history
    loading: false,
    error: null,
  },
  reducers: {
    clearChat: (state) => {
      state.messages = []; // Clear chat history
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;

        // ✅ Push user message
        state.messages.push({
          text: action.payload.userMessage,
          sender: "user",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });

        // ✅ Ensure bot message exists before pushing
        const botMessage = action.payload.botResponse || "No response from bot."; // Fix here
        state.messages.push({
          text: botMessage,
          sender: "bot",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearChat } = chatSlice.actions;
export default chatSlice.reducer;
