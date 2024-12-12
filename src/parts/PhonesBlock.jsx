'use client'

import Image from 'next/image'

const phones = [
	{
		phone: '74950010903',
		adaptPhone: '+7 (495) 001-09-03',
		alt: 'резервный номер',
	},
	{ phone: '79860000903', adaptPhone: '+7 (986) 000-09-03', alt: 'телефон' },
]

const PhonesBlock = (props) => {
	const { contacts, wrapper, item, phone } = props

	return (
		<div className={contacts}>
			<div className={wrapper}>
				{phones.map((phoneItem, index) => (
					<div key={index} className={item}>
						<Image
							src="/assets/img/icons/tel.svg"
							alt={phoneItem.alt}
							width={20}
							height={20}
						/>
						<a href={`tel:+${phoneItem.phone}`} className={phone}>
							{phoneItem.adaptPhone}
						</a>
					</div>
				))}
			</div>
		</div>
	)
}

export default PhonesBlock
