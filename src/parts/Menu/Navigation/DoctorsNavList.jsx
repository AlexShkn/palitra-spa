'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { menuStateChange } from '@/redux/slices/menuSlice'

import { useMediaQuery } from '@/hooks/useMediaQuery'

const doctorsList = [
	{
		link: 'zolotukhin-mikhail-anatolevich',
		photo: 'zolotuhin',
		name: 'Золотухин Михаил Анатольевич',
		post: 'Главный врач, стоматолог-ортопед-терапевт',
	},
	{
		link: 'sheyanov-viktor-alekseevich',
		photo: 'sheyanov',
		name: 'Шеянов Виктор Алексеевич',
		post: 'Хирург - имплантолог',
	},
	{
		link: 'chvedadze-georgiy-merabovich',
		photo: 'chvedadze',
		name: 'Цхведадзе Георгий Мерабович',
		post: 'Детский стоматолог',
	},
	{
		link: 'hvatov-roman-evgenievich',
		photo: 'hvatov',
		name: 'Хватов Роман Евгеньевич',
		post: 'Стоматолог-терапевт. Детский стоматолог',
	},
	{
		link: 'zharkih-alena-sergeevna',
		photo: 'zharkih',
		name: 'Жарких Алена Сергеевна',
		post: 'Врач-стоматолог ортодонт',
	},
	{
		link: 'novikova-valentina-igorevna',
		photo: 'novikova',
		name: 'Новикова Валентина Игоревна',
		post: 'Хирург-пародонтолог',
	},
	{
		link: 'horozova-margarita-vladimirovna',
		photo: 'horozova',
		name: 'Хорозова Маргарита Владимировна',
		post: 'Врач - гигиенист',
	},
]

const DoctorsNavList = () => {
	const dispatch = useDispatch()

	const isTablet = useMediaQuery('(max-width: 991.98px)')

	const handleDoctorLinkClick = (e) => {
		if (isTablet) {
			e.preventDefault()
		}
	}

	const closeNavMenu = () => {
		console.log('click')

		document.body.style.overflow = 'auto'
		dispatch(menuStateChange(false))
	}

	return (
		<ul className="dropdown__nav-list">
			<li data-nav-link="doctors" className="dropdown__nav-item">
				<Link
					href="/doctors"
					className="dropdown__nav-button dropdown__nav-button--mobile-hidden"
					onClick={handleDoctorLinkClick}>
					Врачи
					<svg className="icon">
						<use xlinkHref="/assets/img/sprite.svg#arrow-drop"></use>
					</svg>
				</Link>
				<ul className="dropdown__inner-nav-list dropdown__inner-nav-list--mobile-hidden scroll-bar">
					{doctorsList.map((doctor, index) => (
						<li key={index} className="dropdown__inner-nav-link">
							<Link onClick={closeNavMenu} href={`/doctors/${doctor.link}`}>
								<Image
									className="dropdown__inner-nav-image"
									src={`/assets/img/doctors-nav/${doctor.photo}.png`}
									alt=""
									width={50}
									height={50}
								/>
								<div className="dropdown__inner-nav--description">
									<div className="dropdown__inner-nav-title">{doctor.name}</div>
									<div className="dropdown__inner-nav-text">{doctor.post}</div>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</li>
		</ul>
	)
}

export default DoctorsNavList
