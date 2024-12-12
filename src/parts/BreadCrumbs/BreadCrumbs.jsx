'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from './BreadCrumbs.module.scss'

const dictionary = {
	doctors: 'Врачи',
	services: 'Услуги',
	implantation: 'Имплантация',
	contacts: 'Контакты',
	promotions: 'Акции и скидки',
	prices: 'Цены',
}

const Breadcrumbs = () => {
	const pathname = usePathname()
	const pathParts = pathname.split('/').filter((part) => part)

	const breadcrumbs = [
		...pathParts.map((part, index) => ({
			label: dictionary[part],
			href: `/${pathParts.slice(0, index + 1).join('/')}`,
		})),
	]

	return (
		<nav aria-label="breadcrumb">
			<ul className={s.breadCrumbs}>
				<div className={`${s.breadCrumbsContainer} container`}>
					<Link href="/" className={s.breadCrumbsLink}>
						<svg className="icon">
							<use xlinkHref="/assets/img/sprite.svg#home"></use>
						</svg>
					</Link>
					{breadcrumbs.map((crumb, index) => (
						<Link key={index} href={crumb.href} className={s.breadCrumbsLink}>
							{crumb.label}
						</Link>
					))}
				</div>
			</ul>
		</nav>
	)
}

export default Breadcrumbs
