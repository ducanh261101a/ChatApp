import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
  name: 'userInfor',
  initialState: {
    userInfor: {},
  },
  reducers: {
    addInfo: (state, action) => {
      state.userInfor = action.payload;
    },
    clearInfo: (state, action) => {
      state.userInfor = action.payload;
    },
  },
});
