import Link from 'next/link'
import Image from 'next/image'

import s from './Services.module.scss'

const servicesList = [
	{
		link: 'lechenie-zubov-v-lubercah',
		img: 'vzrosloe2',
		alt: 'лечение зубов',
		title: 'Лечение зубов',
		subtitle: 'Забудьте о страхе: ваша улыбка <br /> в профессиональных руках!',
		icon: 'lechenie',
	},
	{
		link: 'detskoe-otdelenie',
		img: 'childrens1',
		alt: 'детское отделение',
		title: 'Детская стоматология в Люберцах',
		subtitle: 'Сберечь здоровье детских зубов - <br /> наша главная задача!',
		icon: 'smile',
	},
	{
		link: 'gigiena',
		img: 'gigiena',
		alt: 'гигиена полости рта',
		title: 'Профессиональная гигиена',
		subtitle: 'Профилактика заболеваний <br /> зубов и десен',
		icon: 'gigiena',
	},
	{
		link: 'ortodontiya',
		img: 'gigiena2',
		alt: 'ортодонтические услуги',
		title: 'Ортодонтия',
		subtitle: 'Мы превращаем проблемы с зубами в возможности для улыбки!',
		icon: 'brekets',
	},
]

const Services = () => {
	return (
		<section className={`${s.services} section-offset`}>
			<div className="container">
				<h2 className={s.title}>
					Услуги стоматологии <span>«Палитра»</span>
				</h2>
				<ul className={s.list}>
					{servicesList.map((item, index) => (
						<li key={index} className={s.card}>
							<Link href={`/services/${item.link}`} className={s.cardWrapper}>
								<Image
									className={s.imageBg}
									src={`/assets/img/services/${item.img}.jpg`}
									alt={item.alt}
									width={320}
									height={0}
									priority
								/>

								<div className={s.cardContent}>
									<div className={s.cardTitle}>{item.title}</div>
									<div
										className={s.cardDescription}
										dangerouslySetInnerHTML={{ __html: item.subtitle }}
									/>
									<div className={`${s.cardButton} button button--accent`}>
										<span>
											<svg className="icon">
												<use
													xlinkHref={`/assets/img/sprite.svg#${item.icon}`}></use>
											</svg>
											Узнать подробнее
										</span>
									</div>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Services
