import React from 'react'
import Image from 'next/image'

import s from './DoctorPage.module.scss'
import DoctorPageSlider from './DoctorPageSlider'

const DoctorPageCard = ({ doctorData }) => {
	return (
		<div className={s.cardBody}>
			<Image
				className={s.cardImage}
				src={`/assets/img/doctors/${doctorData.id}/doctor.webp`}
				width={300}
				height={390}
				priority
				alt=""
			/>

			<div className={s.about}>
				<h1 className={s.aboutTitle}>{doctorData.name}</h1>
				<div className={s.aboutProfessions}>{doctorData.professions}</div>

				{doctorData && (
					<div className={s.aboutRegalia}>{doctorData.regalia}</div>
				)}

				<div className={s.aboutClinic}>
					<Image
						src="/assets/img/icons/doctor-page/locate.svg"
						width={100}
						height={0}
						alt=""
					/>
					<address>{doctorData.locate}</address>
				</div>
				<div className={s.aboutExperience}>
					<Image
						src="/assets/img/icons/doctor-page/time.svg"
						width={100}
						height={0}
						alt=""
					/>
					Стаж: {doctorData.experience}
				</div>
				{doctorData.sertCount && (
					<DoctorPageSlider count={doctorData.sertCount} id={doctorData.id} />
				)}
			</div>
		</div>
	)
}

export default DoctorPageCard
