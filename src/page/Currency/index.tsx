import React from 'react'
import { getValue } from '../../redux/slice/valueSlice'
import Button from '../../component/UI/Button'
import { useAppDispatch, useAppSelector } from '../../hooks'
import './currency.Module.scss'
import { IValueGet } from '../../component/models/IValueGet'
const Currency = () => {
	const dispatch = useAppDispatch()
	const valueGet: IValueGet[] = useAppSelector(state => state.value.value)
	return (
		<main className='currency'>
			<div className='currency__header'>
				<h2 className='currency__title'>Поточні курси валют: UAH</h2>
				<div onClick={() => dispatch(getValue())} className='currency__btn'>
					<Button>Оновити</Button>
				</div>
			</div>
			<ul className='currency__items'>
				{valueGet.map(e => (
					<li key={e.cc} className='currency__item'>
						<p>Валюта: {e.cc}</p>
						<p>Цена: {e.rate}</p>
					</li>
				))}
			</ul>
		</main>
	)
}

export default Currency
