import { GPSLocation } from '@interfaces/open-weather-api/location'

const handleRequest = (response: Response) => {
	if (!response.ok) {
		if (response.status === 404) {
			throw new Error('Resource Not found')
		}
		throw new Error('An unexpected error has occurred')
	}

	return response.json()
}

export const getLocationNameByCoords = (
	lat: number,
	lon: number,
	abortController: AbortController
): Promise<GPSLocation[]> => {
	return fetch(
		`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
		{
			method: 'GET',
			signal: abortController.signal,
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
