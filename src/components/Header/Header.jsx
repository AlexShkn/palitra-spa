'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import useCurrentScroll from '@/hooks/useCurrentScroll'

import s from './Header.module.scss'
import Menu from '@/parts/Menu/Menu'
import HeaderInfoBlock from '@/parts/HeaderInfoBlock'
import PhonesBlock from '@/parts/PhonesBlock'

import { useDispatch } from 'react-redux'
import { menuStateChange } from '@/redux/slices/menuSlice'

const Header = () => {
	const [navIsOpen, setNavIsOpen] = React.useState(false)
	const dispatch = useDispatch()

	const isTablet = useMediaQuery('(max-width: 991.98px)')
	const isMobile = useMediaQuery('(max-width: 767.98px)')
	const isMobileSmall = useMediaQuery('(max-width: 478.98px)')

	const scroll = useCurrentScroll()

	const openMobileMenu = () => {
		document.body.style.overflow = 'hidden'
		dispatch(menuStateChange(true))
	}

	const prevScroll = React.useRef(0)

	React.useEffect(() => {
		if (!isMobileSmall && navIsOpen && scroll !== prevScroll.current) {
			setNavIsOpen(false)
			document.body.style.overflow = 'auto'
			dispatch(menuStateChange(false))
		}
		prevScroll.current = scroll
	}, [scroll, navIsOpen, dispatch, isMobileSmall])

	return (
		<header
			className={`${s.header} ${
				!isTablet &&
				scroll > 100 &&
				!navIsOpen &&
				!isMobileSmall &&
				s.headerHidden
			}`}>
			<div className={s.wrapper}>
				<div className={`container ${s.container}`}>
					<div
						onClick={() =>
							isMobileSmall ? openMobileMenu() : setNavIsOpen((prev) => !prev)
						}
						className={`${s.iconMenuToggle} ${scroll > 100 && s.show} ${
							navIsOpen && s._active
						}`}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className={s.body}>
						<div className={`${s.logo} logo-block ${scroll > 100 && s.move}`}>
							<Link
								href="/"
								className={`logo-block__logo-img ${s.logoBlock__logoImg}`}>
								<Image
									src="/assets/img/logo.png"
									alt="стоматология в Люберцах Палитра"
									width={70}
									height={70}
								/>
								<b></b>
							</Link>

							{!isMobile && <HeaderInfoBlock className={s.logoBlock__text} />}
						</div>

						{!isTablet && (
							<PhonesBlock
								contacts={s.contacts}
								wrapper={s.contactsWrapper}
								item={s.contactsItem}
								phone={s.phone}
							/>
						)}

						<button
							type="button"
							className={`${s.button} button button--white`}>
							<Image
								src="/assets/img/icons/callback-phone.svg"
								alt="обратный вызов"
								width={20}
								height={20}
							/>
							<span>Запись на прием</span>
						</button>

						<a href="https://wa.me/79860000903" className={s.socialLink}>
							<Image
								src="/assets/img/icons/messanger.svg"
								alt="Палитра дент"
								width={40}
								height={40}
							/>
						</a>
					</div>
				</div>
			</div>
			<div className={s.headerSubheader}>
				<div className={`${s.container} container`}>
					<div onClick={openMobileMenu} className={s.iconMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>

					{!isTablet && <Menu />}

					<div className={s.subheaderBlock}>
						{isMobile && <HeaderInfoBlock className={s.logoBlock__text} />}

						{isTablet && (
							<PhonesBlock
								contacts={s.contacts}
								wrapper={s.contactsWrapper}
								item={s.contactsItem}
								phone={s.phone}
							/>
						)}
					</div>
				</div>
			</div>

			{isTablet && <Menu />}
		</header>
	)
}

export default Header
