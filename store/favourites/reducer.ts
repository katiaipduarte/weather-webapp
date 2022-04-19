import { GPSLocation } from '@interfaces/open-weather-api/location'
import { Reducer } from 'redux'
import { Favourites, FavouritesType, FAVOURITES_INITIAL_STATE } from './type'

type FavouritesReducer = {
	type: string
	payload?: any
}

const favouritesReducer: Reducer<Favourites> = (
	state: Favourites = FAVOURITES_INITIAL_STATE,
	action: FavouritesReducer
) => {
	switch (action.type) {
		case FavouritesType.INIT_FAVOURITES:
			return {
				...state,
				favourites: [...state.favourites, ...action.payload],
			}
		case FavouritesType.ADD_FAVOURITE:
			return {
				...state,
				favourites: [...state.favourites, action.payload],
			}
		case FavouritesType.DELETE_FAVOURITE:
			return {
				...state,
				favourites: state.favourites.filter(
					(i: GPSLocation) =>
						!(i.lat === action.payload.lat && i.lon === action.payload.lon)
				),
			}
		default:
			return { ...state }
	}
}

export default favouritesReducer
