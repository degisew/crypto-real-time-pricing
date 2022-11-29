import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("fetchInfo", async () => {
    const response = await fetch('https://api.coincap.io/v2/assets/?limit=10');
    const { data } = await response.json();
    // console.log(data);
    return data;
});

const slice = createSlice({
    name: "cryptoInfo",
    initialState: {
      crypto: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, { payload }) => {
          return {
            ...state,
            crypto: payload,
        }
    });
 
    }
})

export { fetchData };
export default slice.reducer;