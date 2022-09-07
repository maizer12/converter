import React from 'react'

const Input = ({ setInputValue }) => {
	
	return (
		<input
			type='number'
			placeholder='0'
			onChange={event => setInputValue(event.target.value)}
			className='converter__input'
		/>
	)
}

export default Input
