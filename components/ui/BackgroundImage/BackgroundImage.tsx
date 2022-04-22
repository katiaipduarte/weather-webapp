import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Box } from './BackgroundImage.style'

type Props = {
	description: string
}

const BackgroundImage = (props: Props): JSX.Element => {
	const { description } = props
	const [width, setWidth] = useState<number>()
	const [height, setheight] = useState<number>()

	const getWindowDimensions = (): { width: number; height: number } => {
		const { innerWidth: width, innerHeight: height } = window
		return {
			width,
			height,
		}
	}

	useEffect(() => {
		const { width, height } = getWindowDimensions()

		setWidth(width)
		setheight(height)
	}, [])

	useEffect(() => {
		const handleResize = () => {
			const { width, height } = getWindowDimensions()

			setWidth(width)
			setheight(height)
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const getBackgroundImg = (): string => {
		let weatherImg = ''

		switch (description) {
			case 'Thunderstorm':
				weatherImg = '/assets/johannes-plenio-E-Zuyev2XWo-unsplash.jpg'
				break
			case 'Drizzle':
				weatherImg = '/assets/roman-synkevych-qPvBmSvmohs-unsplash.jpg'
				break
			case 'Rain':
				weatherImg = '/assets/valentin-muller-bWtd1ZyEy6w-unsplash.jpg'
				break
			case 'Snow':
				weatherImg = '/assets/adam-chang-IWenq-4JHqo-unsplash.jpg'
				break
			case 'Clear':
				weatherImg = '/assets/julian-hochgesang-DgXBwP2OiLo-unsplash.jpg'
				break
			case 'Clouds':
				weatherImg = '/assets/jerry-wang-gC-D2J14si8-unsplash.jpg'
				break
			case 'Smoke':
			case 'Fog':
			case 'Mist':
			case 'Haze':
			case 'Dust':
				weatherImg = '/assets/dimitry-anikin-mz-ME8_xTik-unsplash.jpg'
				break
			default:
				weatherImg = '/assets/andrew-neel-1-29wyvvLJA-unsplash.jpg'
				break
		}

		return weatherImg
	}

	if (width && height) {
		return (
			<Box>
				<Image
					src={getBackgroundImg()}
					alt={description}
					width={width}
					height={height}
				/>
			</Box>
		)
	}

	return <></>
}

export default BackgroundImage
