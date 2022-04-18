import { PlacesResponse } from '@interfaces/places-response'
import { Reducer } from 'redux'
import { INITIAL_SEARCH_STATE, SearchState, SearchTypes } from './type'

type SearchReducer = {
	type: string
	payload?: any
}

export const getSelectedLocation = (
	searchTerm: string,
	locations: PlacesResponse[]
): PlacesResponse => {
	const separate = searchTerm.split(', ')
	const city = separate[0]
	const country = separate.length === 1 ? '' : separate[1]

	if (country === '') {
		return locations.find(
			(i: PlacesResponse) => i.name === city
		) as PlacesResponse
	}

	return locations.find(
		(i: PlacesResponse) => i.name === city && i.country.name === country
	) as PlacesResponse
}

const searchStateReducer: Reducer<SearchState> = (
	state: SearchState = INITIAL_SEARCH_STATE,
	action: SearchReducer
) => {
	switch (action.type) {
		case SearchTypes.SEARCH_ITEMS_LOAD:
			return { ...state, locations: action.payload }
		case SearchTypes.SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.payload,
			}
		case SearchTypes.SEARCH_CLEAR:
			return { ...state, searchQuery: '', locations: [] }
		case SearchTypes.SEARCH_FOUND:
			return {
				...state,
				searchQuery: '',
				locations: [],
				searchedResult: action.payload,
			}
		case SearchTypes.SEARCH_QUERY_SELECTED:
			const selectedLocation = getSelectedLocation(
				action.payload,
				state.locations
			)
			return {
				...state,
				searchQuery: action.payload,
				searchedResult: selectedLocation,
			}
		default:
			return { ...state }
	}
}

export default searchStateReducer
