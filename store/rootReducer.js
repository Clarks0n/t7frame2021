import { configureStore } from '@reduxjs/toolkit';
import getDataSlice from './actions/getDataSlice';

export const store = configureStore({
    reducer: {
        getDataSlice: getDataSlice.reducer
    }
})