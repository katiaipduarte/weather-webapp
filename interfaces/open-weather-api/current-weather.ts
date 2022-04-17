import { WeatherDescription } from './weather-description'

export interface CurrentWeather {
	dt: number //datetime in unix format
	sunrise: number //datetime in unix format
	sunset: number //datetime in unix format
	temp: number
	feels_like: number
	pressure: number
	humidity: number
	dew_point: number
	uvi: number
	clouds: number
	visibility: number
	wind_speed: number //the wind speed is in m/s, to use km/h we need to multiply by 3.6
	wind_deg: number
	wind_gust: number
	weather: WeatherDescription[]
}
