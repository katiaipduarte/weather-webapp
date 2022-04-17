import { WeatherResponse } from '@interfaces/open-weather-api/weather-response'

const WeatherProvider = () => {
	const exclude = 'minutely,hourly,alerts'

	const getWeatherByCoordinates = async (
		lat: number,
		lon: number,
		abortController: AbortController
	): Promise<WeatherResponse> => {
		return await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
			{
				method: 'GET',
				signal: abortController.signal,
			}
		)
			.then((response) => handleRequest(response))
			.then((weather: WeatherResponse) => {
				return weather
			})
	}

	const handleRequest = (response: Response) => {
		if (!response.ok) {
			if (response.status === 404) {
				throw new Error('Resource Not found')
			}
			throw new Error('An unexpected error has occurred')
		}
		return response.json()
	}

	return {
		getWeatherByCoordinates,
	}
}

export default WeatherProvider
