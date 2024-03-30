import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../types/user";

const initialState: UserInfo = {
  displayName: "",
  email: "",
  phoneNumber: "",
  photoURL: "",
  uid: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserInfo>) => {
      const { displayName, phoneNumber, photoURL, token, uid, email } =
        action.payload;
      state.displayName = displayName;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.photoURL = photoURL;
      state.token = token;
      state.uid = uid;
    },
    removeUser: (state) => {
      return initialState;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
