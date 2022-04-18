import { CurrentWeather } from '@interfaces/open-weather-api/current-weather'
import Image from 'next/image'
import { WeatherInfoContainer } from './CurrentWeather.style'

type Props = {
	currentWeather: CurrentWeather
	city: string
}

const CurrentWeather = (props: Props) => {
	const { currentWeather, city } = props
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
				<h3>{city}</h3>
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
		</WeatherInfoContainer>
	)
}

export default CurrentWeather
