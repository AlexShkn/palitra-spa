import React from 'react'
import s from './DoctorPage.module.scss'
import DoctorPageCardBody from './DoctorPageCardBody'
import DoctorPageDescr from './DoctorPageCardDescr'

const DoctorPageCard = ({ data }) => {
	return (
		<section className={s.doctorPage}>
			<div className="container">
				<div className={`${s.title} page-title`}>Карточка врача</div>
				<div className={s.card}>
					<DoctorPageCardBody doctorData={data} />
					<DoctorPageDescr doctorData={data} />
				</div>
			</div>
		</section>
	)
}

export default DoctorPageCard
