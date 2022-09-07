import {configureStore} from '@reduxjs/toolkit'
import value from './slice/valueSlice'

const store = configureStore({
	reducer:{
		value
	}
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch