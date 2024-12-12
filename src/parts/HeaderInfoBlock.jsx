'use client'

import Address from './Menu/Details/Address'

const HeaderInfoBlock = (className) => {
	return (
		<div
			data-da=".headerSubheader__block, 767.98, first"
			className={`logo-block__text ${className}`}>
			<Address />
			<span>
				<svg className="icon">
					<use xlinkHref="/assets/img/sprite.svg#time" />
				</svg>
				Работаем ежедневно с 9.00 до 21.00
			</span>
		</div>
	)
}

export default HeaderInfoBlock
