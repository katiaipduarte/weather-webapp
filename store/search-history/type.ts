import { GPSLocation } from '../../interfaces/open-weather-api/location'
export const SearchHistoryType = {
	ADD_HISTORY: '@@SEARCH_HISTORY/ADD_HISTORY',
}

export interface SearchHistory {
	locations: GPSLocation[]
}

export const SEARCH_HISTORY_INITIAL_STATE: SearchHistory = {
	locations: [],
}
