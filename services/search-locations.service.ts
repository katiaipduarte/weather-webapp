import { GPSLocation } from '@interfaces/open-weather-api/location'
import { PlacesResponse } from '@interfaces/places-response'
import { handleRequest } from '@utils/handle-request'
import { toast } from 'react-toastify'

export const searchForLocations = async (
	query: string
): Promise<GPSLocation[]> => {
	return await fetch(
		`https://spott.p.rapidapi.com/places/autocomplete?q=${query}&limit=4&type=CITY`,
		{
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'spott.p.rapidapi.com',
				'X-RapidAPI-Key': process.env.NEXT_PUBLIC_LOCATION_API_KEY,
			} as HeadersInit,
		}
	)
		.then((response) => handleRequest(response))
		.then((response: PlacesResponse[]) => {
			if (response && Object.keys(response).length === 0) {
				toast.error('An unexpected error has occurred')
			}

			const location: GPSLocation[] = []
			response.map((i: PlacesResponse) => {
				location.push({
					lon: i.coordinates.longitude,
					lat: i.coordinates.latitude,
					country: i.country.name,
					name: i.name,
				})
			})

			return location
		})
}
