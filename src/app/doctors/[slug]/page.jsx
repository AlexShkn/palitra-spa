import DoctorPageCard from '@/components/Doctors/DoctorPage/DoctorPageCard'

import doctors from '../../../data/doctors'
export async function generateMetadata({ params }) {
	const { slug } = await params
	const doctor = doctors.find((doc) => doc.slug === slug)

	if (!doctor) {
		return {
			title: 'Врач не найден',
			description: 'К сожалению, информация о данном враче отсутствует.',
		}
	}

	return {
		title: `${doctor.name} - Стоматологическая клиника «Палитра»`,
		description: `Все о докторе ${doctor.name} Фото, цена консультации. Запись на прием в клинике «Палитра». Любрецы, Кожухово, Косино, Некрасовка`,
		openGraph: {
			title: `${doctor.name} - Семейная стоматология в Люберцах`,
			description:
				'Запишитесь на приём на сайте или по телефону +7 (986) 000-09-03',
			url: `https://palitra-dent.ru/doctors/${slug}`,
			images: [
				{
					url: `https://palitra-dent.ru/doctors/${doctor.id}/doctor.png"`,
					alt: doctor.name,
				},
			],
		},
		alternates: { canonical: `https://palitra-dent.ru/doctors/${slug}` },
	}
}

const fetchData = (slug) => {
	return doctors.find((doc) => doc.slug === slug)
}

export default async function DoctorPage({ params }) {
	const { slug } = await params // Используем await для получения slug

	const doctor = fetchData(slug)

	if (!doctor) {
		return <h1>Врач не найден</h1>
	}

	return (
		<div>
			<DoctorPageCard data={doctor} />
		</div>
	)
}
