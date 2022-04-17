import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document'
import { ReactFragment } from 'react'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				) as unknown as ReactFragment,
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang='en-US'>
				<Head>
					<meta charSet='utf-8' />
					<meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
					<meta name='theme-color' content='#FFFFFF' />
					<meta name='keywords' content='weather' />
					<meta property='og:site_name' content='weather-webapp' />
					<meta property='og:locale' content='en-US' />
					<meta
						name='description'
						content='See the weather for your location and others for today and the next seven'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
