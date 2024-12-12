'use client'

import React, { useEffect, useRef } from 'react'
import s from './DoctorsFilter.module.scss'

const DoctorsSelect = (props) => {
	const { title, group, items, setFilterValue, closeAllSelects } = props // Added closeAllSelects prop
	const [selectValue, setSelectValue] = React.useState(items[0].value)
	const [isOpen, setIsOpen] = React.useState(false)
	const selectRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target) &&
				isOpen
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen])

	const selectStatusChange = () => {
		setIsOpen(!isOpen)
	}

	const changeSelectValue = (value) => {
		setSelectValue(value)
		setIsOpen(false)

		if (group === 'specialization') {
			setFilterValue(value)
		}
	}

	return (
		<div className={s.selectsRow}>
			<h2 className={s.selectsTitle}>{title}</h2>
			<div
				className={`${s.select} ${isOpen && s.open} select-container`}
				ref={selectRef}>
				<div onClick={selectStatusChange} className={s.selectButton}>
					<span>{selectValue}</span>
					<img
						src="/assets/img/sprite/arrow-drop.svg"
						alt=""
						width={10}
						height={10}
					/>
				</div>
				<ul className={s.selectList}>
					{items.map((item, index) => (
						<li
							onClick={() => changeSelectValue(item.value)}
							key={index}
							className={`${s.selectItem} ${s.show}`}>
							<input
								defaultChecked={index === 0}
								id={`${group}-${index}`}
								data-specialization={item.value}
								type="radio"
								value={item.value}
								name={group}
							/>
							<label htmlFor={`${group}-${index}`}>{item.value}</label>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default DoctorsSelect
