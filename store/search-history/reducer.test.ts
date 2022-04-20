import { DEFAULT_COORDINATES } from '../../constants/default-coordinates'
import searchHistoryReducer from './reducer'
import { SearchHistoryType, SEARCH_HISTORY_INITIAL_STATE } from './type'

describe('Test Suite for Favourites Store Reducer', () => {
	it('should update search history by adding a new location', () => {
		const location = DEFAULT_COORDINATES

		const addSearchHistoryAction = {
			type: SearchHistoryType.ADD_HISTORY,
			payload: location,
		}
		expect(
			searchHistoryReducer(SEARCH_HISTORY_INITIAL_STATE, addSearchHistoryAction)
				.locations
		).toEqual([location])
	})
})
