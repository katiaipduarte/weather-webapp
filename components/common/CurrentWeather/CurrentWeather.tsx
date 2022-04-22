import FavouriteButton from '@components/ui/FavouriteButton/FavouriteButton'
import { CurrentWeather } from '@interfaces/open-weather-api/current-weather'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { getFavouriteByCoords } from '@services/favourites.service'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { WeatherInfoContainer } from './CurrentWeather.style'

type Props = {
	currentWeather: CurrentWeather
	location: GPSLocation
}

const CurrentWeather = (props: Props) => {
	const { currentWeather, location } = props
	const [favourite, setFavourite] = useState<boolean>()
	const [favouriteId, setFavouriteId] = useState<string>('')

	useEffect(() => {
		getFavouriteByCoords(location.lat, location.lon).then((res: string) => {
			if (res === '') {
				setFavourite(false)
			} else {
				setFavourite(true)
				setFavouriteId(res)
			}
		})
	}, [location])

	const symbol = '\u00b0'

	const getIconSrc = (): string => {
		return `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`
	}

	const getDate = (): string => {
		const options = {
			weekday: 'long',
			year: '2-digit',
			month: 'long',
			day: 'numeric',
		} as Intl.DateTimeFormatOptions

		const date = new Date()

		return date.toLocaleDateString(undefined, options)
	}

	return (
		<WeatherInfoContainer>
			<h2>
				{Math.round(currentWeather.temp)}
				{symbol}
			</h2>
			<div className='location-current-weather'>
				<div className='location-column'>
					<h3>{location.name}</h3>
					<p>{getDate()}</p>
				</div>
				{favourite !== undefined && (
					<FavouriteButton
						location={location}
						status={favourite}
						favouriteId={favouriteId}
					/>
				)}
			</div>
			<div className='weather-column'>
				<Image
					src={getIconSrc()}
					width='40px'
					height='40px'
					className='icon-image'
					alt={currentWeather.weather[0].main}
				/>
				<p>{currentWeather.weather[0].main}</p>
			</div>
		</WeatherInfoContainer>
	)
}

export default CurrentWeather
