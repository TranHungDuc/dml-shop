import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/user/userSlice'

export const store = configureStore({
    reducer: {
		auth: authReducer,
    	counter: counterReducer,
  	},
});
