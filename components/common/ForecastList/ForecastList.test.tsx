import { mockWeatherResponse } from '@mocks/weather-response.mock'
import { render } from '@testing-library/react'
import ForecastList from './ForecastList'

describe('<ForecastList /> component Unit Test', () => {
	it('should render 1 <ForecastList /> component', () => {
		const { container } = render(
			<ForecastList forecast={mockWeatherResponse.daily} />
		)
		expect(container).toMatchSnapshot()
	})
})
