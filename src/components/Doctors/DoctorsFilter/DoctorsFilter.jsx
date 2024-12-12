'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import DoctorsSelect from './DoctorsSelect'

import s from './DoctorsFilter.module.scss'
import t from '../../Home/Team/TeamTabsCard.module.scss'

const DoctorsFilter = () => {
	const [filterValue, setFilterValue] = React.useState('Все')
	const doctorsList = [
		{
			id: 'zolotuhin',
			photo: 'zolotuhin',
			name: 'Золотухин Михаил Анатольевич',
			post: 'Главный врач. <br/> Стоматолог - ортопед - терапевт.',
			stage: '24 года',
			link: 'zolotukhin-mikhail-anatolevich',
			specializations: ['Терапевт', 'Ортопед'],
		},
		{
			id: 'sheyanov',
			photo: 'sheyanov',
			name: 'Шеянов Виктор Алексеевич',
			post: 'Хирург - имплантолог',
			stage: '5 лет',
			link: 'sheyanov-viktor-alekseevich',
			specializations: ['Хирург', 'Имплантолог'],
		},
		{
			id: 'chvedadze',
			photo: 'chvedadze',
			name: 'Цхведадзе Георгий Мерабович',
			post: 'Детский стоматолог',
			stage: '5 лет',
			link: 'chvedadze-georgiy-merabovich',
			specializations: ['Хирург', 'Детский стоматолог'],
		},
		{
			id: 'hvatov',
			photo: 'hvatov',
			name: 'Хватов Роман Евгеньевич',
			post: 'Стоматолог - терапевт. Детский стоматолог.',
			stage: '17 лет',
			link: 'hvatov-roman-evgenievich',
			specializations: ['Терапевт', 'Детский стоматолог'],
		},
		{
			id: 'zharkih',
			photo: 'zharkih',
			name: 'Жарких Алена Сергеевна',
			post: 'Врач-стоматолог ортодонт',
			stage: '5 лет',
			link: 'zharkih-alena-sergeevna',
			specializations: ['Ортодонт'],
		},
		{
			id: 'novikova',
			photo: 'novikova',
			name: 'Новикова Валентина Игоревна',
			post: 'Хирург-пародонтолог',
			stage: '17 лет',
			link: 'novikova-valentina-igorevna',
			specializations: ['Пародонтолог', 'Хирург'],
		},
		{
			id: 'horozova',
			photo: 'horozova',
			name: 'Хорозова Маргарита Владимировна',
			post: 'Врач - гигиенист',
			stage: '6 лет',
			link: 'horozova-margarita-vladimirovna',
			specializations: ['Гигиенист'],
		},
	]

	const clinics = [{ value: 'г.Люберцы, ул.8 Марта' }]

	const specialization = [
		{ value: 'Все' },
		{ value: 'Терапевт' },
		{ value: 'Хирург' },
		{ value: 'Ортодонт' },
		{ value: 'Детский стоматолог' },
		{ value: 'Ортопед' },
		{ value: 'Имплантолог' },
		{ value: 'Гигиенист' },
		{ value: 'Пародонтолог' },
	]

	const filteredList =
		filterValue === 'Все'
			? doctorsList
			: doctorsList.filter((doctor) =>
					doctor.specializations.some((item) => item === filterValue),
			  )

	return (
		<section className={s.doctorsFilter}>
			<div className="container">
				<h1 className={`${s.title} page-title`}>Врачи</h1>

				<div className={s.body}>
					<div className={s.selects}>
						<DoctorsSelect
							title={'Клиника'}
							group={'clinics'}
							items={clinics}
							setFilterValue={setFilterValue}
						/>
						<DoctorsSelect
							title={'Специальность'}
							group={'specialization'}
							items={specialization}
							setFilterValue={setFilterValue}
						/>
					</div>

					<ul data-lazy-block className={s.list}>
						{filteredList.map((doctor, index) => (
							<li
								key={index}
								data-doctor-id={doctor.id}
								className={`${t.teamTabsCard} ${s.card} ${s.show}`}>
								<Image
									className={t.image}
									src={`/assets/img/doctors/${doctor.id}/doctor.png`}
									alt=""
									width={386}
									height={0}
									priority
								/>
								<div className={t.description}>
									<div className={t.name}>{doctor.name}</div>

									<p
										className={t.post}
										dangerouslySetInnerHTML={{ __html: doctor.post }}
									/>

									<div className={t.experience}>
										Стаж: <span>{doctor.stage}</span>
									</div>
								</div>
								<div className={t.bottom}>
									<button
										data-btn-callback
										type="button"
										className={`${t.button} button button--accent`}>
										<span>Записаться на приём</span>
									</button>
									<Link href={`/doctors/${doctor.link}`} className={t.link}>
										Подробнее о враче
										<svg className="icon">
											<use xlinkHref="/assets/img/sprite.svg#descr"></use>
										</svg>
									</Link>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default DoctorsFilter
