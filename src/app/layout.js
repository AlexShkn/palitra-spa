import './globals.css'
import Header from '@/components/Header/Header'
import ClientProvider from '@/components/ClientProvider'

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
				<ClientProvider>
					<div className="wrapper">
						<Header />
						<main className="page">{children}</main>
					</div>
				</ClientProvider>
			</body>
		</html>
	)
}
