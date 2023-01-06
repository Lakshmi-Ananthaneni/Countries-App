import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'dark'
}

const themeSlice = createSlice ({
    name: 'theme',
    initialState: initialState,
    reducers: {
        switchLight: (state) => {
            state.theme = 'light'
        },
        switchDark: (state) => {
            state.theme = 'dark'
        }
    }
})

export const { switchDark, switchLight } = themeSlice.actions
export default themeSlice.reducer;