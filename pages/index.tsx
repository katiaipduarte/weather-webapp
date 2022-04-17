import { DEFAULT_COORDINATES } from '@constants/default-coordinates'
import { WeatherResponse } from '@interfaces/open-weather-api/weather-response'
import { getWeatherByCoords } from '@services/weather.service'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Title } from '../styles'

const Home: NextPage = () => {
	// 	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		const abortController = new AbortController()
		// setIsFetching(true)

		getWeatherByCoords(
			DEFAULT_COORDINATES.lat,
			DEFAULT_COORDINATES.lon,
			abortController
		).then((weather: WeatherResponse) => {
			// setIsFetching(false)
			console.log(weather)
			// console.log(isFetching)
		})

		return () => {
			abortController.abort()
		}
	}, [])

	return (
		<>
			<Head>
				<title>See the weather to your current location</title>
			</Head>

			<main>
				<Title>My page</Title>
			</main>

			<footer></footer>
		</>
	)
}

export default Home
