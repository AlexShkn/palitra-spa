import Image from 'next/image'

const MailLink = () => {
	return (
		<a href="mailto:palitra-dent@mail.ru" className="details__item">
			<Image
				src="/assets/img/icons/mail-nav.svg"
				alt="почта клиники"
				width={20}
				height={20}
			/>
			<span>palitra-dent@mail.ru</span>
		</a>
	)
}

export default MailLink
