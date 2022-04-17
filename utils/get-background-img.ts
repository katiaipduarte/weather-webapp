export const getBackgroundImg = (description: string): string => {
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
			weatherImg = '/assets/sara-kurfess-ltE8bDLjX9E-unsplash.jpg'
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
			break
	}

	return weatherImg
}
