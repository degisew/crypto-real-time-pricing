import { configureStore } from "@reduxjs/toolkit";
import fetchDataReducer from './reducer';
const store = configureStore({
    reducer: {
      crypto: fetchDataReducer,
    }
});


export default store;