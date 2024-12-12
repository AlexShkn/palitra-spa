'use client'

import React, { useRef } from 'react'

import Image from 'next/image'

import { useDispatch, useSelector } from 'react-redux'

import { useClickOutside } from '@/hooks/useClickOutside'

import { menuStateChange } from '@/redux/slices/menuSlice'

import s from './Menu.module.scss'
import h from '../../components/Header/Header.module.scss'

import Navigation from './Navigation/Navigation'

const Menu = () => {
	const dispatch = useDispatch()

	const { menuIsOpen } = useSelector((state) => state.menu)

	const closeNavMenu = () => {
		document.body.style.overflow = 'auto'
		dispatch(menuStateChange(false))
	}

	const modalRef = useRef(null)

	useClickOutside(modalRef, () => {
		closeNavMenu()
	})

	return (
		<div className={s.menu}>
			<div className={`${s.overlay} ${menuIsOpen && s.show}`}></div>
			<div ref={modalRef} className={`${s.body} ${menuIsOpen && s.show}`}>
				<button type="button" className={s.close}>
					<Image
						onClick={closeNavMenu}
						src="/assets/img/icons/xmark.svg"
						alt="close"
						width={20}
						height={0}
						priority
					/>
				</button>
				<Navigation />

				<div className={s.footer}>
					<div className={s.footerWrapper}>
						<div className={s.phones}>
							<a href="tel+79860000903">+7-993-992-09-03</a>
							<a href="tel+74950010903">+7-495-001-09-03</a>
						</div>
						<div className={s.social}>
							<a href="https://t.me/+79860000903" className={h.socialLink}>
								<Image
									src="/assets/img/icons/social/telegram.svg"
									alt="связь в мессенджере telegram"
									width={20}
									height={20}
								/>
							</a>
							<a href="https://wa.me/79860000903" className={h.socialLink}>
								<Image
									src="/assets/img/icons/social/whatsapp.svg"
									alt="связь в мессенджере"
									width={20}
									height={20}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Menu
