import LayoutWrapper from '@components/templates/LayoutWrapper/LayoutWrapper'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { WeatherResponse } from '@interfaces/open-weather-api/weather-response'
import { getLocationNameByCoords } from '@services/location.service'
import { getWeatherByCoords } from '@services/weather.service'
import useQuery from '@utils/use-query'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Location: NextPage = () => {
	const [isFetching, setIsFetching] = useState<boolean>(false)
	const [weather, setWeather] = useState<WeatherResponse>()
	const [location, setLocation] = useState<GPSLocation>()
	const query = useQuery()

	useEffect(() => {
		if (!query) {
			return
		}

		const lat: number | undefined = query.lat ? +query.lat : undefined
		const lon: number | undefined = query.lon ? +query.lon : undefined

		if (!!lat && !!lon) {
			getWeather(lat, lon)
		}
	}, [query])

	const getWeather = (lat: number, lon: number): void => {
		const abortController = new AbortController()
		setIsFetching(true)

		Promise.all([
			getWeatherByCoords(lat, lon, abortController),
			getLocationNameByCoords(lat, lon, abortController),
		]).then((values: [WeatherResponse, GPSLocation]) => {
			const weather = values[0]
			const location: GPSLocation = values[1]

			setWeather(weather)
			setLocation(location)
			setIsFetching(false)
		})
	}

	return (
		<>
			<Head>
				<title>See the weather to the found location</title>
			</Head>

			{!isFetching && weather && location && (
				<LayoutWrapper weather={weather} location={location} />
			)}
		</>
	)
}

export default Location
