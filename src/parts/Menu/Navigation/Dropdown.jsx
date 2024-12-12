'use client'

import { useState } from 'react'
import s from '../Menu.module.scss'

import { useMediaQuery } from '@/hooks/useMediaQuery'

const Dropdown = ({ children }) => {
	const [dropIsOpen, setDropIsOpen] = useState(false)

	const dropdownChangeStatus = () => {
		setDropIsOpen(!dropIsOpen)
	}

	const isTablet = useMediaQuery('(max-width: 991.98px)')

	return (
		<li
			onClick={isTablet ? dropdownChangeStatus : undefined}
			className={`${s.item} dropdown ${dropIsOpen ? 'show' : ''}`}>
			{children()}
		</li>
	)
}

export default Dropdown
