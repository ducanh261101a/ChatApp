import {configureStore} from '@reduxjs/toolkit';
import LoginSlide from '../navigators/LoginScreens/LoginSlide';

const store = configureStore({
  reducer: {
    userInfo: LoginSlide.reducer,
  },
});

export default store;
