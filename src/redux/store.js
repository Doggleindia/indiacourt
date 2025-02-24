import { configureStore } from "@reduxjs/toolkit";
import legalTopicsSlice from "./features/legalTopicsSlice";
import booksReducer from "./features/booksSlice";
import helplineReducer from "./features/helplineSlice"; 
import articlesReducer from "./features/articlesSlice"; 
import chatReducer from "./features/chatSlice";
import bareActsReducer from "./features/bareActsSlice";
import judgementsReducer from "./features/judgementsSlice";
import resourcesReducer from "./features/resourcesSlice";
const store = configureStore({
  reducer: {
    legalTopics: legalTopicsSlice,
    books: booksReducer,
    helpline: helplineReducer,
    articles: articlesReducer,
    chat: chatReducer,
    bareActs: bareActsReducer,
    judgements: judgementsReducer,
    resources: resourcesReducer,
  },
});

export default store;
