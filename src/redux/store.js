import { configureStore } from '@reduxjs/toolkit'
import menuSliceReducer from './slices/menuSlice'

export const store = configureStore({
	reducer: {
		menu: menuSliceReducer,
	},
})
