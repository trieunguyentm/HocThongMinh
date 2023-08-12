import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            fetching: false,
            error: false,
        },
        signup: {
            success: false,
            fetching: false,
            error: false
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.fetching = true;
            state.login.currentUser = null;
            state.login.error = false;
        },
        loginSuccess: (state, action) => {
            state.login.fetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFail: (state) => {
            state.login.fetching = false;
            state.login.currentUser = null;
            state.login.error = true;
        },
        signupStart: (state) => {
            state.signup.fetching = true;
            state.signup.success = false;
            state.signup.error = false;
        },
        signupSuccess: (state) => {
            state.signup.fetching = false;
            state.signup.success = true;
            state.signup.error = false;
        },
        signupFail: (state) => {
            state.signup.fetching = false;
            state.signup.success = false;
            state.signup.error = true;
        },
        logoutStart: (state) => {
            state.login.fetching = true;
            state.login.error = false;
        },
        logoutSuccess: (state) => {
            state.login.fetching = false;
            state.login.currentUser = null;
            state.login.error = false;
        },
        logoutFail: (state) => {
            state.login.fetching = false;
            state.login.error = true;
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFail,
    signupStart,
    signupSuccess,
    signupFail,
    logoutStart,
    logoutSuccess,
    logoutFail
} = authSlice.actions;

export default authSlice.reducer;