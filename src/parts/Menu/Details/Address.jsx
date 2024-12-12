import React from 'react'

const Address = ({ classStyle }) => {
	return (
		<address className={classStyle}>
			<svg className="icon">
				<use xlinkHref="/assets/img/sprite.svg#locate" />
			</svg>
			г.Люберцы, ул.8 Марта, д.20, к.2 пом.4
			<a
				href="https://yandex.ru/maps/?rtext=~55.69937657243625,37.885155584655756"
				target="_blank"
				className="tooltip">
				Построить маршрут
			</a>
		</address>
	)
}

export default Address
