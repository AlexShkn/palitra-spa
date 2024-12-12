import Hero from '@/components/Hero/Hero'
import Services from '@/components/Home/Services/Services'

export const metadata = {
	title:
		'Стоматология Люберцы🦷 Палитра - профессиональная помощь по доступной цене',
	description:
		'Современная стоматологическая клиника в Люберцах - широкий спектр услуг по доступным ценам. Скидки пенсионерам и ветеранам боевых действий. Запишитесь на прием онлайн на сайте и по телефону ☎️ +7 (986) 000-09-03',
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
	},
	alternates: { canonical: 'https://palitra-dent.ru' },
}

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
		</>
	)
}
