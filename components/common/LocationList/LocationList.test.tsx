import { mockLocationResponse } from '@mocks/location-response.mock'
import { render } from '@testing-library/react'
import LocationList from './LocationList'

describe('<LocationList /> component Unit Test', () => {
	it('should render 1 <ForecastList /> component', () => {
		const { container } = render(
			<LocationList locations={[mockLocationResponse]} />
		)
		expect(container).toMatchSnapshot()
	})
})
