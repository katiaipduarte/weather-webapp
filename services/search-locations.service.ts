import { PlacesResponse } from '@interfaces/places-response'
import { handleRequest } from '@utils/handle-request'

export const searchForLocations = async (
	query: string
): Promise<PlacesResponse[]> => {
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
		.then((response) => {
			if (response && Object.keys(response).length === 0) {
				throw new Error('An unexpected error has occurred')
			}

			return response
		})
}
