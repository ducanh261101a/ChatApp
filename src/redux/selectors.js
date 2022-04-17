import {createSelector} from '@reduxjs/toolkit';

const selectSelf = state => state;
export const userInformation = createSelector(
  selectSelf,
  state => state.userInfo,
);
