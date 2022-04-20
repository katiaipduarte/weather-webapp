import { handleRequest } from '@utils/handle-request'
import { toast } from 'react-toastify'

const exclude = 'minutely,hourly,alerts'

export const getWeatherByCoords = async (
	lat: number,
	lon: number,
	abortController: AbortController
) => {
	return fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
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

			return response
		})
}
