import { mockLocationResponse } from '@mocks/location-response.mock'
import { mockWeatherResponse } from '@mocks/weather-response.mock'
import { render } from '@testing-library/react'
import CurrentWeather from './CurrentWeather'

describe('<CurrentWeather /> component Unit Test', () => {
	it('should render 1 <CurrentWeather /> component', () => {
		const { container } = render(
			<CurrentWeather
				currentWeather={mockWeatherResponse.current}
				location={mockLocationResponse}
			/>
		)
		expect(container).toMatchSnapshot()
	})
})
