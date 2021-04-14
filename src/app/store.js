import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import categoryReducer from "../features/categorySlice";

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
  },
});
