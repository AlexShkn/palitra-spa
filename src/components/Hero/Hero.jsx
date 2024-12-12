import Link from 'next/link'
import Image from 'next/image'

import s from './Hero.module.scss'
import Schedule from '@/parts/Menu/Details/Schedule'
import Address from '@/parts/Menu/Details/Address'

const Hero = () => {
	return (
		<section className={s.hero}>
			<Image
				className={s.imageBg}
				src="/assets/img/hero/reception2.jpg"
				alt="стоматология в люберцах"
				width={1237}
				height={669}
				priority
			/>

			<div className={`${s.container} container`}>
				<div className={s.wrapper}>
					<div className={s.body}>
						<h1 className={s.title}>
							Стоматология <br /> в Люберцах
						</h1>
						<div className={s.subtitle}>
							Безболезненное лечение, современное оборудование, заботливые
							специалисты
						</div>
						<div className={s.buttons}>
							<a
								href="https://wa.me/79860000903"
								className={`${s.button} button button--green`}>
								<span>
									<Image
										src="/assets/img/icons/social/wp.svg"
										alt="вопрос специалисту"
										width={20}
										height={20}
									/>
									Задать вопрос
								</span>
							</a>
							<button
								type="button"
								className={`${s.button} button button--accent`}>
								<span>Запись на первый приём</span>
							</button>
						</div>

						<div className="details">
							<Schedule />
							<Address classStyle={'details__item'} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
