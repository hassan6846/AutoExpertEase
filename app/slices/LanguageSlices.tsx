//Slice only contain Language related options only
import { createSlice } from "@reduxjs/toolkit"

const LanguageSlice = createSlice({

    name: "Language",
    initialState: {
        language: ""
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { setLanguage } = LanguageSlice.actions