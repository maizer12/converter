import React from 'react';
import './button.Module.scss'
const Button = ({children}) => {
	return (
		<button className='button'>
			<p>{children}</p>
		</button>
	)
};

export default Button;