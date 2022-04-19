import CurrentWeather from '@components/common/CurrentWeather/CurrentWeather'
import ForecastList from '@components/common/ForecastList/ForecastList'
import SearchBar from '@components/common/SearchBar/SearchBar'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { WeatherResponse } from '@interfaces/open-weather-api/weather-response'
import { getBackgroundImg } from '@utils/get-background-img'
import { Logo, MainContainer, Sidebar } from './LayoutWrapper.style'

type Props = {
	weather: WeatherResponse
	location: GPSLocation
}

const LayoutWrapper = (props: Props): JSX.Element => {
	const { weather, location } = props

	return (
		<>
			<MainContainer
				style={{
					backgroundImage: `url(${getBackgroundImg(
						weather.current.weather[0].main as string
					)})`,
				}}
			>
				<Logo className='logo'>weather.app⁢</Logo>
				{weather && (
					<>
						<CurrentWeather
							currentWeather={weather.current}
							location={location}
						/>
						<ForecastList forecast={weather.daily} />
					</>
				)}
				<Sidebar>
					<SearchBar />
				</Sidebar>
			</MainContainer>
		</>
	)
}

export default LayoutWrapper
