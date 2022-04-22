import LayoutWrapper from '@components/templates/LayoutWrapper/LayoutWrapper'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { WeatherResponse } from '@interfaces/open-weather-api/weather-response'
import { getLocationNameByCoords } from '@services/location.service'
import { getWeatherByCoords } from '@services/weather.service'
import { addSearch } from '@store/search-history/action'
import useQuery from '@utils/use-query'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Location: NextPage = () => {
	const [isFetching, setIsFetching] = useState<boolean>(false)
	const [weather, setWeather] = useState<WeatherResponse>()
	const [location, setLocation] = useState<GPSLocation>()
	const dispatch = useDispatch()
	const query = useQuery()

	const getWeather = useCallback(
		(lat: number, lon: number): void => {
			const abortController = new AbortController()
			setIsFetching(true)

			Promise.all([
				getWeatherByCoords(lat, lon, abortController),
				getLocationNameByCoords(lat, lon, abortController),
			]).then((values: [WeatherResponse, GPSLocation]) => {
				const weather = values[0]
				const location: GPSLocation = values[1]

				dispatch(addSearch(location))
				setWeather(weather)
				setLocation(location)
				setIsFetching(false)
			})
		},
		[dispatch]
	)
	useEffect(() => {
		if (!query) {
			return
		}

		const lat: number | undefined = query.lat ? +query.lat : undefined
		const lon: number | undefined = query.lon ? +query.lon : undefined

		if (!!lat && !!lon) {
			getWeather(lat, lon)
		}
	}, [query, getWeather])

	return (
		<>
			<Head>
				<title>Weather</title>
			</Head>

			{!isFetching && weather && location && (
				<LayoutWrapper weather={weather} location={location} />
			)}
		</>
	)
}

export default Location
