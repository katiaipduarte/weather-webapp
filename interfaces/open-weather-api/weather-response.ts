import { CurrentWeather } from './current-weather'
import { DailyWeather } from './daily-weather'

export interface WeatherResponse {
	lat: number
	lon: number
	timezone: string
	timezone_offset: number
	current: CurrentWeather
	daily: DailyWeather[]
}
