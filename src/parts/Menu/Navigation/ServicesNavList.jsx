'use client'

import Link from 'next/link'

const ServicesNavList = () => {
	return (
		<ul className="dropdown__nav-list">
			<li data-nav-link="services" className="dropdown__nav-item">
				<button className="dropdown__nav-button">
					Услуги
					<svg className="icon">
						<use xlinkHref="/assets/img/sprite.svg#arrow-drop"></use>
					</svg>
				</button>
				<ul className="dropdown__inner-nav-list scroll-bar">
					<li
						data-nav-link="services/implantaciya-zubov"
						className="dropdown__inner-nav-link">
						<Link href="/services/implantaciya-zubov">
							<svg className="icon">
								<use xlinkHref="/assets/img/sprite.svg#implant"></use>
							</svg>
							Имплантация
						</Link>
						<div className="dropdown__inner-nav-sublist">
							<Link
								href="/services/all-on-4"
								className="dropdown__inner-nav-sublink">
								All-on-4
							</Link>
							<Link
								href="/services/implanti-vega"
								className="dropdown__inner-nav-sublink">
								Vega
							</Link>
						</div>
					</li>
					<li
						data-nav-link="services/veneeri-v-lubercah"
						className="dropdown__inner-nav-link">
						<Link href="/services/veneeri-v-lubercah">
							<svg className="icon">
								<use xlinkHref="/assets/img/sprite.svg#veneers"></use>
							</svg>
							Виниры
						</Link>
					</li>
					<li
						data-nav-link="services/breketi-i-elayneri"
						className="dropdown__inner-nav-link">
						<Link href="/services/breketi-i-elayneri">
							<svg className="icon">
								<use xlinkHref="/assets/img/sprite.svg#breketi"></use>
							</svg>
							Брекеты
						</Link>
					</li>
					<li data-nav-link="gigiena" className="dropdown__inner-nav-link">
						<Link href="/gigiena">
							<svg className="icon">
								<use xlinkHref="/assets/img/sprite.svg#gigiena"></use>
							</svg>
							Профессиональная гигиена
						</Link>
					</li>
					<li
						data-nav-link="detskoe-otdelenie"
						className="dropdown__inner-nav-link">
						<Link href="/detskoe-otdelenie">
							<svg className="icon">
								<use xlinkHref="/assets/img/sprite.svg#smile"></use>
							</svg>
							Детская стоматология
						</Link>
					</li>
					<li
						data-nav-link="services/lechenie-zubov-v-lubercah"
						className="dropdown__inner-nav-link">
						<Link href="/services/lechenie-zubov-v-lubercah">
							<svg className="icon">
								<use xlinkHref="/assets/img/sprite.svg#lechenie"></use>
							</svg>
							Лечение зубов
						</Link>
					</li>
					<li
						data-nav-link="services/udalenie-zuba"
						className="dropdown__inner-nav-link">
						<Link href="/services/udalenie-zuba">
							<svg className="icon">
								<use xlinkHref="/assets/img/sprite.svg#udalenie"></use>
							</svg>
							Удаление зубов
						</Link>
					</li>
					<li data-nav-link="ortodontiya" className="dropdown__inner-nav-link">
						<Link href="/ortodontiya">
							<svg className="icon">
								<use xlinkHref="/assets/img/sprite.svg#brekets"></use>
							</svg>
							Ортодонтия
						</Link>
					</li>
				</ul>
			</li>
		</ul>
	)
}

export default ServicesNavList
