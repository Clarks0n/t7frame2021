import { configureStore } from '@reduxjs/toolkit';
import getDataSlice from './actions/getDataSlice';

export default configureStore({
    reducer: {
        getDataSlice: getDataSlice.reducer
    }
})