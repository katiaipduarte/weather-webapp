import { DailyWeather } from '@interfaces/open-weather-api/daily-weather'
import { WeatherDescription } from '@interfaces/open-weather-api/weather-description'
import { convertUnixTimestampToWeekday } from '@utils/convert-unix-timestamp'
import Image from 'next/image'
import React from 'react'
import { List } from './ForecastList.style'

type Props = {
	forecast: DailyWeather[]
}

const ForecastList = (props: Props) => {
	const { forecast } = props

	const getIconSrc = (weather: WeatherDescription[]): string => {
		return `http://openweathermap.org/img/w/${weather[0].icon}.png`
	}

	const renderList = (): JSX.Element => {
		return (
			<>
				{forecast.map((entry: DailyWeather, i: number) => {
					const symbol = '\u00b0'

					return (
						<React.Fragment key={i}>
							<div className='forecast-column'>
								<p className='weekday'>
									{convertUnixTimestampToWeekday(entry.dt)}
								</p>
								<Image
									src={getIconSrc(entry.weather)}
									width='40px'
									height='40px'
									className='icon-image'
									alt={entry.weather[0].main}
								/>
								<br />
								<span className='weather-temp'>
									<b className='label'>Min: </b>
									{entry.temp.min}
									{symbol}
								</span>
								<br />
								<span className='weather-temp'>
									<b className='label'>Max: </b>
									{entry.temp.max}
									{symbol}
								</span>
							</div>
						</React.Fragment>
					)
				})}
			</>
		)
	}

	return <List aria-label='forecast data'>{renderList()}</List>
}

export default ForecastList
