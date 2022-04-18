import CurrentWeather from '@components/common/CurrentWeather/CurrentWeather'
import ForecastList from '@components/common/ForecastList/ForecastList'
import SearchBar from '@components/common/SearchBar/SearchBar'
import { WeatherResponse } from '@interfaces/open-weather-api/weather-response'
import { getBackgroundImg } from '@utils/get-background-img'
import { Logo, MainContainer, Sidebar } from './LayoutWrapper.style'

type Props = {
	weather: WeatherResponse
	cityName: string
}

const LayoutWrapper = (props: Props): JSX.Element => {
	const { weather, cityName } = props

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
						<CurrentWeather currentWeather={weather.current} city={cityName} />
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
