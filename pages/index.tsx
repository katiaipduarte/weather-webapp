import LayoutWrapper from '@components/templates/LayoutWrapper/LayoutWrapper'
import { DEFAULT_COORDINATES } from '@constants/default-coordinates'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { WeatherResponse } from '@interfaces/open-weather-api/weather-response'
import { getLocationNameByCoords } from '@services/location.service'
import { getWeatherByCoords } from '@services/weather.service'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
	const [isFetching, setIsFetching] = useState<boolean>(false)
	const [weather, setWeather] = useState<WeatherResponse>()
	const [location, setLocation] = useState<GPSLocation>()

	useEffect(() => {
		navigator.geolocation.watchPosition(success, error)

		return () => {
			navigator.geolocation.watchPosition(success, error)
		}
	}, [])

	const success = (position: any): void => {
		const abortController = new AbortController()

		const coords = {
			lat: position.coords.latitude,
			lon: position.coords.longitude,
		}

		Promise.all([
			getWeatherByCoords(coords.lat, coords.lon, abortController),
			getLocationNameByCoords(coords.lat, coords.lon, abortController),
		]).then((values: [WeatherResponse, GPSLocation]) => {
			const weather = values[0]
			const location: GPSLocation = values[1]

			setWeather(weather)
			setLocation(location)
			setIsFetching(false)
		})
	}

	const error = (): void => {
		const abortController = new AbortController()
		setIsFetching(true)

		getWeatherByCoords(
			DEFAULT_COORDINATES.lat,
			DEFAULT_COORDINATES.lon,
			abortController
		).then((weather: WeatherResponse) => {
			setWeather(weather)
			setLocation(DEFAULT_COORDINATES)
			setIsFetching(false)
		})
	}

	return (
		<>
			<Head>
				<title>Current Location Weather</title>
			</Head>

			{!isFetching && weather && location && (
				<LayoutWrapper weather={weather} location={location} />
			)}
		</>
	)
}

export default Home
