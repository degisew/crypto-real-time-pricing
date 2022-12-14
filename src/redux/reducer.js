import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = createAsyncThunk('fetchInfo', async () => {
  const response = await fetch('https://api.coincap.io/v2/assets/?limit=20');
  const { data } = await response.json();
  return data;
});

const slice = createSlice({
  name: 'cryptoInfo',
  initialState: {
    crypto: [],
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => ({
      ...state,
      crypto: payload,
    }));
  },
});

export { fetchData };
export default slice.reducer;
