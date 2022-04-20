import { DEFAULT_COORDINATES } from '../../constants/default-coordinates'
import * as actions from './action'
import { SearchHistoryType } from './type'

describe('Test Suite for Favourite Store Actions', () => {
	it('should create an action to update search history', () => {
		const search = DEFAULT_COORDINATES
		const expectAction = {
			type: SearchHistoryType.ADD_HISTORY,
			error: undefined,
			meta: undefined,
			payload: search,
		}

		expect(actions.addSearch(search)).toEqual(expectAction)
	})
})
