import { GPSLocation } from '@interfaces/open-weather-api/location'
import { DEFAULT_COORDINATES } from './../../constants/default-coordinates'
import favouritesReducer from './reducer'
import { FavouritesType, FAVOURITES_INITIAL_STATE } from './type'

describe('Test Suite for Favourites Store Reducer', () => {
	it('should init favourites list by adding information', () => {
		const favourites: GPSLocation[] = []
		const init = {
			type: FavouritesType.INIT_FAVOURITES,
			payload: favourites,
		}

		expect(
			favouritesReducer(FAVOURITES_INITIAL_STATE, init).favourites
		).toEqual(favourites)
	})

	it('should update favourites by adding a new object', () => {
		const object = DEFAULT_COORDINATES

		const addFavouriteAction = {
			type: FavouritesType.ADD_FAVOURITE,
			payload: object,
		}
		expect(
			favouritesReducer(FAVOURITES_INITIAL_STATE, addFavouriteAction).favourites
		).toEqual([object])
	})

	it('should update favourites by removing an object', () => {
		const object = DEFAULT_COORDINATES

		const deleteFavouriteAction = {
			type: FavouritesType.DELETE_FAVOURITE,
			payload: object,
		}
		expect(
			favouritesReducer(FAVOURITES_INITIAL_STATE, deleteFavouriteAction)
				.favourites
		).toEqual([])
	})
})
