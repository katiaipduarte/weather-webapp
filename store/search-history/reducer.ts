import { Reducer } from 'redux'
import {
	SearchHistory,
	SearchHistoryType,
	SEARCH_HISTORY_INITIAL_STATE,
} from './type'

type SearchHistoryReducer = {
	type: string
	payload?: any
}

const searchHistoryReducer: Reducer<SearchHistory> = (
	state: SearchHistory = SEARCH_HISTORY_INITIAL_STATE,
	action: SearchHistoryReducer
) => {
	switch (action.type) {
		case SearchHistoryType.ADD_HISTORY:
			return {
				...state,
				locations: [...state.locations, action.payload],
			}
		default:
			return { ...state }
	}
}

export default searchHistoryReducer
