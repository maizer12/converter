import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IValueGet } from '../../component/models/IValueGet'

export const getValue = createAsyncThunk<IValueGet>(
	'value/getValue',
	async () => {
		try {
			const { data } = await axios.get(
				'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
			)
			return data
		} catch (err) {
			console.log(err)
		}
	}
)
const initialState:any = {
	value: [],
}

export const valueSlice = createSlice({
	name: 'value',

	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getValue.fulfilled, (state, action) => {
			state.value = action.payload
		})
	},
})
export const {} = valueSlice.actions
export default valueSlice.reducer
