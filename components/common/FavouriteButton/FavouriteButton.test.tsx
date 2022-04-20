import { DEFAULT_COORDINATES } from '@constants/default-coordinates'
import store from '@store/store'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import { Provider } from 'react-redux'
import FavouriteButton from './FavouriteButton'

describe('the <FavouriteButton /> component', () => {
	it('should render unfavourite button correctly', () => {
		const { container } = render(
			<Provider store={store}>
				<FavouriteButton
					location={DEFAULT_COORDINATES}
					status={false}
					favouriteId={'0'}
				/>
			</Provider>
		)
		expect(container).toMatchSnapshot()
	})

	it('should render favourite button correctly', () => {
		const { container } = render(
			<Provider store={store}>
				<FavouriteButton
					location={DEFAULT_COORDINATES}
					status={true}
					favouriteId={'0'}
				/>
			</Provider>
		)
		expect(container).toMatchSnapshot()
	})
})
