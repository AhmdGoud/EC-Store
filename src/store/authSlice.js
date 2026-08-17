import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  currentUserName: "",
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handelLog(state) {
      state.status = !state.status;
    },

    addNewUser(state, action) {
      const newUser = action.payload;
      state.users.push(newUser);
    },

    handelCurrentUserName(state, action) {
      state.currentUserName = action.payload;
    },
  },
});

export const { handelLog, addNewUser, handelCurrentUserName } =
  authSlice.actions;
export default authSlice.reducer;
