import React, { useEffect, useState } from 'react'
import './header.Module.scss'
import { Link } from 'react-router-dom'
import { getValue } from '../../redux/slice/valueSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { IValueGet } from '../models/IValueGet'


type IMenu = {
	name: string,
	link:string
}

const Header = () => {
	const valueGet: IValueGet[] = useAppSelector(state => state.value.value)
	const [valueHeader, setValueHeader] = useState<IValueGet[]>([])
	const dispatch = useAppDispatch()
	const navMenu:IMenu[] = [
		{ name: 'Конвертер', link: '/' },
		{ name: 'Курс валют', link: '/currency' },
	]
	const [numActive, setNumActive] = useState<number>(0)
	useEffect(() => {
		setValueHeader(valueGet.filter(e => e.cc === 'USD' || e.cc === 'EUR'))
	}, [valueGet])
	useEffect(() => {
		dispatch(getValue())
	}, [])
	return (
		<header className='header'>
			<div className='header__container'>
				<nav className='menu'>
					{navMenu.map((e, i) => (
						<Link
							onClick={() => setNumActive(i)}
							key={e.name}
							to={e.link}
							className={`menu__link ${
								numActive === i ? 'menu__link-active' : ''
							}`}
						>
							{e.name}
						</Link>
					))}
				</nav>
				<ul className='header__items'>
					<li className='header__item'>Теперішній курс:</li>
					<li className='header__item'>
						{valueHeader.length >= 1
							? valueHeader[0].cc + ' ' + valueHeader[0].rate
							: 0}
					</li>
					<li className='header__item'>
						{valueHeader.length >= 1
							? valueHeader[1].cc + ' ' + valueHeader[1].rate
							: 0}
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
