import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from '../store/store'
import { GlobalStyle } from '../styles'
import theme from '../styles/theme'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</ThemeProvider>
		</>
	)
}

export default App
