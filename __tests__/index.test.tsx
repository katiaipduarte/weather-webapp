import { mockLocationResponse } from '@mocks/location-response.mock'
import { mockNavigatorGeolocation } from '@mocks/navigator-geolocation.mock'
import { mockWeatherResponse } from '@mocks/weather-response.mock'
import Home from '@pages/index'
import { getLocationNameByCoords } from '@services/location.service'
import { getWeatherByCoords } from '@services/weather.service'
import store from '@store/store'
import theme from '@styles/theme'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

jest.mock('../services/weather.service')
jest.mock('../services/location.service')

describe('Home', () => {
	const renderComponent = ({ theme }) =>
		render(
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<Home />
				</Provider>
			</ThemeProvider>
		)

	const mockWeatherService = getWeatherByCoords as jest.MockedFunction<
		typeof getWeatherByCoords
	>
	const mockLocationService = getWeatherByCoords as jest.MockedFunction<
		typeof getLocationNameByCoords
	>
	const { getCurrentPositionMock } = mockNavigatorGeolocation()

	test('renders homepage unchanged', async () => {
		getCurrentPositionMock.mockImplementation((_success, rejected) =>
			rejected({
				code: '',
				message: '',
				PERMISSION_DENIED: '',
				POSITION_UNAVAILABLE: '',
				TIMEOUT: '',
			})
		)
		mockWeatherService.mockResolvedValue(mockWeatherResponse)
		mockLocationService.mockResolvedValue(mockLocationResponse)

		// Render new instance in every test to prevent leaking state
		const { container } = renderComponent({ theme: theme })

		expect(container).toMatchSnapshot()
	})
})
