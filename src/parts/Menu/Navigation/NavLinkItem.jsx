'use client'

import Link from 'next/link'
import s from '../Menu.module.scss'

const NavLinkItem = ({ link, title }) => {
	return (
		<li className={s.item}>
			<Link href={link} className={s.link}>
				{title}
			</Link>
		</li>
	)
}

export default NavLinkItem
