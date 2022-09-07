import './Home.Module.scss'
import React, { useEffect, useState } from 'react'
import { IValueGet } from '../../component/models/IValueGet'
import Input from '../../component/UI/Input'
import Select from '../../component/UI/Select'
import Button from '../../component/UI/Button'
import { useAppSelector } from '../../hooks'
const Home = () => {
	const [sumMassive, setSumMassive] = useState<number[]|any>([0, ])
	const [inputValue, setInputValue] = useState<number>(0)
	const [result, setResult] = useState<number>(0)
	const [userTop, setUserTop] = useState<number>(0)
	const [userBottom, setUserBottom] = useState<number>(0)
	const valueGet:IValueGet[] = useAppSelector(state => state.value.value)
	useEffect(() => {
		if (valueGet.length >= 1) {
			sumMassive.push(valueGet.filter(e => e.cc === 'USD').map(e => e.rate))
			sumMassive.push(valueGet.filter(e => e.cc === 'EUR').map(e => e.rate))
			sumMassive.push(valueGet.filter(e => e.cc === 'RUB').map(e => e.rate))
		}
	}, [valueGet])
	const calc = () => {
		if (userTop == 0 && userBottom == 0) {
			setResult(inputValue)
		} else if (userTop == 0) {
			setResult(inputValue / sumMassive[userBottom])
		} else if (userBottom == 0) {
			setResult(inputValue * sumMassive[userTop])
		} else {
			setResult((inputValue * sumMassive[userTop]) / sumMassive[userBottom])
		}
	}
	return (
		<main>
			<section className='converter'>
				<h1 className='converter__title'>Конвертер Валют</h1>
				<ul className='converter__items'>
					<li className='converter__item'>
						<h4 className='converter__name'>Віддам</h4>
						<Select getValue={setUserTop} value={userTop} />
						<div className='converter__number'>
							<p className='converter__text'>Віддам</p>
							<Input setInputValue={setInputValue} />
						</div>
					</li>
					<li className='converter__item'>
						<h4 className='converter__name'>Отримаю</h4>
						<Select getValue={setUserBottom} value={userBottom} />
						<div className='converter__number'>
							<p className='converter__text'>Отримаю</p>
							<p className='converter__input'>{result <= 0 ? 0 : result}</p>
						</div>
					</li>
				</ul>
				<div onClick={() => calc()} className='converter__btn'>
					<Button>порахувати</Button>
				</div>
			</section>
		</main>
	)
}

export default Home
