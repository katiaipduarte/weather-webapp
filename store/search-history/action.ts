import { GPSLocation } from '@interfaces/open-weather-api/location'
import { action, PayloadAction } from 'typesafe-actions'
import { SearchHistoryType } from './type'

export const addSearch = (
	location: GPSLocation
): PayloadAction<string, GPSLocation> =>
	action(SearchHistoryType.ADD_HISTORY, location)
