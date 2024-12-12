import DoctorsFilter from '@/components/Doctors/DoctorsFilter/DoctorsFilter'
import Breadcrumbs from '@/parts/BreadCrumbs/BreadCrumbs'

export const metadata = {
	title:
		'Врачи стоматологии Люберцы стоматологической клиники для все семьи «Палитра»',
	description:
		'Врачи стоматологической клиники для все семьи «Палитра». 👍 Фото. Цены на консультации. Запись на прием',
	canonical: 'https://palitra-dent.ru/doctors',
	openGraph: {
		title: 'Семейная стоматология в Люберцах',
		siteName:
			'Стоматология Палитра - современная и доступная стоматология для всей семьи.',
		description:
			'Запишитесь на приём на сайте или по телефону +7 (986) 000-09-03',
		images: [
			{
				url: 'https://palitra-dent.ru/preview.jpg',
				alt: 'Главная страница',
			},
		],
		url: 'https://palitra-dent.ru',
		alternates: { canonical: 'https://palitra-dent.ru/doctors' },
	},
}

export default function Doctors() {
	return (
		<>
			<Breadcrumbs />
			<DoctorsFilter />
		</>
	)
}
