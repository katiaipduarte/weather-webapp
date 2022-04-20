import { GPSLocation } from '@interfaces/open-weather-api/location'
import { handleRequest } from '@utils/handle-request'
import { toast } from 'react-toastify'

export const getLocationNameByCoords = (
	lat: number,
	lon: number,
	abortController: AbortController
): Promise<GPSLocation> => {
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
				toast.error('An unexpected error has occurred')
			}

			const location: GPSLocation = {
				lon: response[0].lon,
				lat: response[0].lat,
				country: response[0].country,
				name: response[0].name,
			}

			return location
		})
}
