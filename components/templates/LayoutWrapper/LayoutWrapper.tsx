import CurrentWeather from '@components/common/CurrentWeather/CurrentWeather'
import ForecastList from '@components/common/ForecastList/ForecastList'
import SearchBar from '@components/common/SearchBar/SearchBar'
import Navbar from '@components/ui/Navbar/Navbar'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { WeatherResponse } from '@interfaces/open-weather-api/weather-response'
import dynamic from 'next/dynamic'
import { Wrapper } from './LayoutWrapper.style'

type Props = {
	weather: WeatherResponse
	location: GPSLocation
}

const LayoutWrapper = (props: Props): JSX.Element => {
	const { weather, location } = props

	const BackgroundImage = dynamic(
		() => import('../../ui/BackgroundImage/BackgroundImage'),
		{
			ssr: false,
			loading: () => <></>,
		}
	)

	return (
		<>
			<Wrapper>
				<Navbar />
				<main>
					{weather && (
						<>
							<CurrentWeather
								currentWeather={weather.current}
								location={location}
							/>
							<ForecastList forecast={weather.daily} />
						</>
					)}
					<section className='sidebar'>
						<SearchBar />
					</section>
				</main>
			</Wrapper>
			<BackgroundImage
				description={weather.current.weather[0].main as string}
			/>
		</>
	)
}

export default LayoutWrapper
