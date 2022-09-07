import React from 'react'
import './style/null.scss'
import { Routes, Route } from 'react-router-dom'
import Currency from './page/Currency'
import Home from './page/Home'
import Header from './component/Header'
function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/currency' element={<Currency />} /> 
			</Routes>
		</div>
	)
}

export default App
