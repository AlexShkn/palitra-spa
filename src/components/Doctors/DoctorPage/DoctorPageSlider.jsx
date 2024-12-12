'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import FsLightbox from 'fslightbox-react'

import s from './DoctorPage.module.scss'

const DoctorPageSlider = ({ count, id }) => {
	const [lightboxImageIndex, setLightboxImageIndex] = React.useState(0)

	const slides = Array.from({ length: count }, (_, i) => (
		<SwiperSlide
			key={i}
			className={s.slide}
			onClick={() => setLightboxImageIndex(i + 1)}>
			<Image
				className={s.slideImage}
				src={`/assets/img/doctors/${id}/sertificats/mini/${i + 1}.jpg`}
				width={120}
				height={100}
				alt={`Certificate ${i + 1}`}
				style={{ filter: 'blur(5px)' }}
				onLoad={(e) => (e.target.style.filter = 'blur(0px)')}
			/>
		</SwiperSlide>
	))

	const sources = [...Array(count).keys()].map(
		(i) => `/assets/img/doctors/${id}/sertificats/${i + 1}.jpg`,
	)

	return (
		<>
			<div className={s.sliderBlock}>
				<div className={s.slider}>
					<Swiper
						className={s.sliderWrapper}
						modules={[Navigation]}
						grabCursor={true}
						spaceBetween={10}
						slidesPerView={'auto'}
						navigation={{
							nextEl: `.${s.sliderBtnNext}`,
							prevEl: `.${s.sliderBtnPrev}`,
						}}
						breakpoints={{
							768: { spaceBetween: 10 },
							991: { spaceBetween: 10 },
							1200: { spaceBetween: 10 },
						}}>
						{slides}
					</Swiper>
				</div>
				<div className={s.sliderButtons}>
					<button className={`${s.sliderBtn} ${s.sliderBtnPrev}`}>
						<svg className="icon">
							<use xlinkHref="/assets/img/sprite.svg#arrow-drop"></use>
						</svg>
					</button>
					<button className={`${s.sliderBtn} ${s.sliderBtnNext}`}>
						<svg className="icon">
							<use xlinkHref="/assets/img/sprite.svg#arrow-drop"></use>
						</svg>
					</button>
				</div>
			</div>
			{lightboxImageIndex !== null && (
				<FsLightbox
					slide={lightboxImageIndex}
					toggler={lightboxImageIndex}
					sources={sources}
				/>
			)}
		</>
	)
}

export default DoctorPageSlider
