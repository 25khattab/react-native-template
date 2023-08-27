import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TokenType } from "./utils";

type AuthState = {
  token: TokenType | null;
  status: 'idle' | 'signedOut' | 'loggedIn';
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status:'idle',
    token:null
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload }: PayloadAction<TokenType>
    ) => {
      state.status="loggedIn"
      state.token=payload
      
    },
    removeCredentials: (state) => {
      state.status="signedOut"
      state.token=null
    }
    
  },
  extraReducers: (builder) => {
    // for automatically assing data when rtk query runs 
    // builder.addMatcher(
    //   AuthApi.endpoints.validate.matchFulfilled,
    //   (state, { payload }) => {
    //     const data: IUserToken = jwtDecode(payload.token);
    //     state.user = {
    //       token: payload.token,
    //       user: payload.user,
    //       userUuid: data.uuid,
    //     };
    //     state.token = payload.token;
    //   }
    // ),
    //   builder.addMatcher(
    //     AuthApi.endpoints.login3rdParty.matchFulfilled,
    //     (state, { payload }) => {
    //       const data: IUserToken = jwtDecode(payload.token);
    //       state.user = {
    //         token: payload.token,
    //         user: payload.user,
    //         userUuid: data.uuid,
    //       };
    //       state.token = payload.token;
    //     }
    //   );
  },
});

export const { setCredentials, removeCredentials } =
  authSlice.actions;

export default authSlice;
