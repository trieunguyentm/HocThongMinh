import { PayloadAction, CaseReducer } from "@reduxjs/toolkit";

interface AuthState {
    login: {
        currentUser: any;
        fetching: boolean;
        error: boolean;
    };
    signup: {
        success: boolean;
        fetching: boolean;
        error: boolean;
    };
}

type AuthCaseReducer<T> = CaseReducer<AuthState, PayloadAction<T>>;

export type AuthReducerMapBuilder = {
    [K in keyof typeof actions]: AuthCaseReducer<Parameters<typeof actions[K]>[1]>
};

declare const actions: {
    loginStart: AuthCaseReducer<void>;
    loginSuccess: AuthCaseReducer<any>;
    loginFail: AuthCaseReducer<void>;
    signupStart: AuthCaseReducer<void>;
    signupSuccess: AuthCaseReducer<void>;
    signupFail: AuthCaseReducer<void>;
    logoutStart: AuthCaseReducer<void>;
    logoutSuccess: AuthCaseReducer<void>;
    logoutFail: AuthCaseReducer<void>;
};

export default actions;
