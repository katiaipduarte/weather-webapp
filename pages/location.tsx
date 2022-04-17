import LayoutWrapper from '@components/templates/LayoutWrapper/LayoutWrapper'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { WeatherResponse } from '@interfaces/open-weather-api/weather-response'
import { getCoordsByLocationName } from '@services/location.service'
import { getWeatherByCoords } from '@services/weather.service'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Location: NextPage = () => {
	const [isFetching, setIsFetching] = useState<boolean>(false)
	const [weather, setWeather] = useState<WeatherResponse>()
	const [cityName, setCityName] = useState<string>('')

	const router = useRouter()
	const { city, country } = router.query

	useEffect(() => {
		const abortController = new AbortController()
		const cityName: string = city as string
		const countryName: string = country as string

		if (!!cityName && !!countryName) {
			setIsFetching(true)

			getCoordsByLocationName(
				city as string,
				country as string,
				abortController
			).then((res: GPSLocation[]) => {
				getWeatherByCoords(res[0].lat, res[0].lon, abortController).then(
					(weather: WeatherResponse) => {
						setWeather(weather)
						setCityName(city as string)
						setIsFetching(false)
					}
				)
			})
		}

		return () => {
			abortController.abort()
		}
	}, [city, country])

	return (
		<>
			<Head>
				<title>See the weather to the found location</title>
			</Head>

			{!isFetching && weather && (
				<LayoutWrapper weather={weather} cityName={cityName} />
			)}
		</>
	)
}

export default Location
