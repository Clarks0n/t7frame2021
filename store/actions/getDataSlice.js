import { createSlice } from '@reduxjs/toolkit';

export const getDataSlice = createSlice({
    name: 'getData',
    initialState: {
        dataFrame: null,
        dataMeta: null,
    },
    reducers: {}
});

export default getDataSlice;