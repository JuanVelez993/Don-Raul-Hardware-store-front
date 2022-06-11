import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            loginReducer(state, action) {
                const stateLoggedIn = { ...state, user: action.payload }
                return stateLoggedIn
            },
            logoutReducer() {
                return { user: null }
            }
        }
    }
)

export default authSlice.reducer

export const { loginReducer, logoutReducer } = authSlice.actions