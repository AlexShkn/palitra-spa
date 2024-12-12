'use client'

import Schedule from '../Details/Schedule'
import MailLink from '../Details/MailLink'
import Address from '../Details/Address'

import s from '../Menu.module.scss'
import ServicesNavList from '@/parts/Menu/Navigation/ServicesNavList'
import DoctorsNavList from '@/parts/Menu/Navigation/DoctorsNavList'
import Dropdown from './Dropdown'
import NavLinkItem from './NavLinkItem'

const Navigation = () => {
	return (
		<nav className={s.wrapper}>
			<ul className={s.list}>
				<NavLinkItem link={'/#about'} title={'О клинике'} />

				<Dropdown children={ServicesNavList} />

				<NavLinkItem
					link={'/services/implantaciya-zubov'}
					title={'Имплантация'}
				/>

				<Dropdown children={DoctorsNavList} />

				<NavLinkItem link={'/prices'} title={'Цены'} />
				<NavLinkItem link={'/promotions'} title={'Акции и скидки'} />
				<NavLinkItem link={'/contacts'} title={'Контакты'} />
			</ul>

			<div className={`${s.details} details`}>
				<Schedule />
				<Address classStyle={'details__item'} />
				<MailLink />
			</div>
		</nav>
	)
}

export default Navigation
