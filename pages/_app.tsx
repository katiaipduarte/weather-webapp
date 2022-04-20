import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
					<ToastContainer
						position='top-right'
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={true}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss={false}
						draggable
						pauseOnHover
					/>
					<Component {...pageProps} />
				</Provider>
			</ThemeProvider>
		</>
	)
}

export default App
