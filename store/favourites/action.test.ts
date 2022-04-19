import { GPSLocation } from '@interfaces/open-weather-api/location'
import { DEFAULT_COORDINATES } from './../../constants/default-coordinates'
import * as actions from './action'
import { FavouritesType } from './type'

describe('Test Suite for Favourite Store Actions', () => {
	it('should create an action to init favourites list', () => {
		const fav: GPSLocation[] = []
		const expectAction = {
			type: FavouritesType.INIT_FAVOURITES,
			error: undefined,
			meta: undefined,
			payload: fav,
		}

		expect(actions.initFavourite(fav)).toEqual(expectAction)
	})

	it('should create an action to update Favourites', () => {
		const fav = DEFAULT_COORDINATES
		const expectAction = {
			type: FavouritesType.ADD_FAVOURITE,
			error: undefined,
			meta: undefined,
			payload: fav,
		}

		expect(actions.addFavourite(fav)).toEqual(expectAction)
	})

	it('should create an action to delete a Favourite', () => {
		const fav = DEFAULT_COORDINATES
		const expectAction = {
			type: FavouritesType.DELETE_FAVOURITE,
			error: undefined,
			meta: undefined,
			payload: fav,
		}

		expect(actions.deleteFavourite(fav)).toEqual(expectAction)
	})
})
