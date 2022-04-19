import { CurrentWeather } from '@interfaces/open-weather-api/current-weather'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { GlobalState } from '@store/store'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import FavouriteButton from '../FavouriteButton/FavouriteButton'
import { WeatherInfoContainer } from './CurrentWeather.style'

type Props = {
	currentWeather: CurrentWeather
	location: GPSLocation
}

const CurrentWeather = (props: Props) => {
	const { currentWeather, location } = props
	const favourites = useSelector((state: GlobalState) => state.favouritesState)
	const isFavourite = favourites.favourites.find(
		(i: GPSLocation) => i.lat === location.lat && i.lon === location.lon
	)

	const symbol = '\u00b0'

	const getIconSrc = (): string => {
		return `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`
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
			<div className='location-column'>
				<h3>{location.name}</h3>
				<p>{getDate()}</p>
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
			<FavouriteButton location={location} status={!!isFavourite} />
		</WeatherInfoContainer>
	)
}

export default CurrentWeather
