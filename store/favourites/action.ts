import { GPSLocation } from '@interfaces/open-weather-api/location'
import { action, PayloadAction } from 'typesafe-actions'
import { FavouritesType } from './type'

export const initFavourite = (
	location: GPSLocation[]
): PayloadAction<string, GPSLocation[]> =>
	action(FavouritesType.INIT_FAVOURITES, location)

export const addFavourite = (
	location: GPSLocation
): PayloadAction<string, GPSLocation> =>
	action(FavouritesType.ADD_FAVOURITE, location)

export const deleteFavourite = (
	id: GPSLocation
): PayloadAction<string, GPSLocation> =>
	action(FavouritesType.DELETE_FAVOURITE, id)
