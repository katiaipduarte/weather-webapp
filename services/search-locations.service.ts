import { PlacesResponse } from '@interfaces/places-response'
import { handleRequest } from '@utils/handle-request'

export const searchForLocations = async (
	query: string,
	abortController: AbortController
): Promise<PlacesResponse[]> => {
	return await fetch(
		`https://spott.p.rapidapi.com/places/autocomplete?q=${query}&type=CITY`,
		{
			method: 'GET',
			signal: abortController.signal,
			headers: {
				'x-rapidapi-key': process.env.NEXT_PUBLIC_LOCATION_API_KEY,
				'x-rapidapi-host': 'spott.p.rapidapi.com',
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
