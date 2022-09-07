import React from 'react'

const Select = ({ value, getValue}) => {
	const option = [
		'UAH украинская гривна',
		'USD доллар США',
		'EUR евро',
		'RUB российский рубль',
	]
	return (
		<>
			<select
				value={value}
				onChange={event => getValue(event.target.value)}
				className='converter__select'
			>
				{option.map((e, i) => (
					<option key={i} value={i}>
						{e}
					</option>
				))}
			</select>
		</>
	)
}

export default Select
