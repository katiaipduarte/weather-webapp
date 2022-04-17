import { mockWeatherResponse } from '@mocks/weather-response.mock'
import Home from '@pages/index'
import { getWeatherByCoords } from '@services/weather.service'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

jest.mock('../services/weather.service')

describe('Home', () => {
	const renderComponent = ({ theme }) =>
		render(
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		)

	const mockService = getWeatherByCoords as jest.MockedFunction<
		typeof getWeatherByCoords
	>

	test('renders homepage unchanged', async () => {
		mockService.mockResolvedValue(mockWeatherResponse)

		// Render new instance in every test to prevent leaking state
		const { container } = renderComponent({ theme: theme })

		expect(container).toMatchSnapshot()
	})

	test('renders a heading', () => {
		renderComponent({ theme: theme })

		const heading = screen.getByRole('heading', {
			name: 'My page',
		})

		expect(heading).toBeInTheDocument()
	})
})
