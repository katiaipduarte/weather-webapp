import Navbar from '@components/ui/Navbar/Navbar'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Wrapper } from './ListLayoutWrapper.style'

type Props = {
	locations: GPSLocation[]
	title: string
}

const ListLayoutWrapper = (props: Props): JSX.Element => {
	const { locations, title } = props

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
					<h1>{title}</h1>

					<section className='location-list'>
						<ul role='list' tabIndex={-1}>
							{locations.length === 0 ? (
								<li data-testid='empty-list'>No results found</li>
							) : (
								<>
									{locations.map((location: GPSLocation) => (
										<li key={location.name} tabIndex={0} role='button'>
											<Link
												href={`/location?lat=${location.lat}&lon=${location.lon}`}
												passHref={true}
											>
												<a data-testid='location-name'>
													{location.name}, {location.country}
												</a>
											</Link>
										</li>
									))}
								</>
							)}
						</ul>
					</section>
					{/* <Sidebar>
					<SearchBar />
				</Sidebar>*/}
				</main>
			</Wrapper>
			<BackgroundImage description={''} />
		</>
	)
}

export default ListLayoutWrapper
