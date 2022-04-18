import { PlacesResponse } from '@interfaces/places-response'

export const SearchTypes = {
	SEARCH_ITEMS_LOAD: '@@SEARCH/SEARCH_ITEMS_LOAD',
	SEARCH_QUERY: '@@SEARCH/SEARCH_QUERY',
	SEARCH_CLEAR: '@@SEARCH/SEARCH_CLEAR',
	SEARCH_FOUND: '@@SEARCH/SEARCH_FOUND',
	SEARCH_QUERY_SELECTED: '@@SEARCH/SEARCH_QUERY_SELECTED',
}

export interface SearchState {
	searchQuery: string
	locations: PlacesResponse[]
	searchedResult: PlacesResponse
}

export const INITIAL_SEARCH_STATE: SearchState = {
	searchQuery: '',
	locations: [],
	searchedResult: {} as PlacesResponse,
}
