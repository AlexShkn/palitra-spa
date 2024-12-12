import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	menuIsOpen: false,
}

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		menuStateChange(state, action) {
			state.menuIsOpen = action.payload
		},
	},
})

export const { menuStateChange } = menuSlice.actions
export default menuSlice.reducer
