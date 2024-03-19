import { createSlice } from "@reduxjs/toolkit"

//Contain fuzzy and full Text search results and queries not filteration just searchbar only

const ProductQuerySlice = createSlice({
  name: "ProductQuery",
  initialState: {
    query: "",
    results: [],
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setQuery, setResults } = ProductQuerySlice.actions;