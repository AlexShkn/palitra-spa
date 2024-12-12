import React from 'react'

import s from './DoctorPage.module.scss'

const DoctorPageDescr = ({ doctorData }) => {
	const { specializations, education, courses, about } = doctorData
	return (
		<div className={s.description}>
			{about && (
				<div className={s.descriptionBlock}>
					<h3 className={s.descriptionTitle}>
						<img
							src={`/assets/img/icons/doctor-page/profile-${about.gender}.svg`}
							width={100}
							height={0}
							alt=""
						/>
						О специалисте
						<span></span>
					</h3>

					<p className={`${s.descriptionText}`}>{about.text}</p>
				</div>
			)}
			{specializations && (
				<div className={s.descriptionBlock}>
					<h3 className={s.descriptionTitle}>
						<img
							src="/assets/img/icons/doctor-page/specialization.svg"
							width={100}
							height={0}
							alt=""
						/>
						Специализация
						<span></span>
					</h3>

					{specializations.map((spec, index) => (
						<p
							key={index}
							className={`${s.descriptionText} ${s.descriptionTextDott}`}>
							{spec}
						</p>
					))}
				</div>
			)}

			{education && (
				<div className={s.descriptionBlock}>
					<h3 className={s.descriptionTitle}>
						<img
							src="/assets/img/icons/doctor-page/education.svg"
							width={100}
							height={0}
							alt=""
						/>
						Образование
						<span></span>
					</h3>
					{education.map((item, index) => (
						<p
							key={index}
							className={`${s.descriptionText} ${s.descriptionTextDott}`}>
							{item}
						</p>
					))}
				</div>
			)}

			{courses && (
				<div className={s.descriptionBlock}>
					<h3 className={s.descriptionTitle}>
						<img
							src="/assets/img/icons/doctor-page/certificate.svg"
							width={100}
							height={0}
							alt=""
						/>
						Повышение квалификации
						<span></span>
					</h3>
					{courses.map((course, index) => (
						<p
							key={index}
							className={`${s.descriptionText} ${s.descriptionTextDott}`}>
							{course}
						</p>
					))}
				</div>
			)}
		</div>
	)
}

export default DoctorPageDescr
