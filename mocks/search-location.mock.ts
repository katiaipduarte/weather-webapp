import { PlacesResponse } from '@interfaces/places-response'

export const mockSearchLocations: PlacesResponse = {
	id: '2267057',
	geonameId: 2267057,
	type: 'CITY',
	name: 'Lisbon',
	population: 517802,
	elevation: 45,
	timezoneId: 'Europe/Lisbon',
	country: { id: 'PT', geonameId: 2264397, name: 'Portugal' },
	adminDivision1: {
		id: 'PT.14',
		geonameId: 2267056,
		name: 'Lisbon District',
	},
	adminDivision2: {
		id: 'PT.14.1106',
		geonameId: 6458923,
		name: 'Lisbon Municipality',
	},
	score: 11.714165,
	coordinates: { latitude: 38.7167, longitude: -9.13333 },
}

export const mockSearchLocationsList: PlacesResponse[] = [
	{
		id: '2267057',
		geonameId: 2267057,
		type: 'CITY',
		name: 'Lisbon',
		population: 517802,
		elevation: 45,
		timezoneId: 'Europe/Lisbon',
		country: { id: 'PT', geonameId: 2264397, name: 'Portugal' },
		adminDivision1: {
			id: 'PT.14',
			geonameId: 2267056,
			name: 'Lisbon District',
		},
		adminDivision2: {
			id: 'PT.14.1106',
			geonameId: 6458923,
			name: 'Lisbon Municipality',
		},
		score: 11.714165,
		coordinates: { latitude: 38.7167, longitude: -9.13333 },
	},
	{
		id: '2267058',
		geonameId: 2267057,
		type: 'CITY',
		name: 'Lisbon',
		population: 517802,
		elevation: 45,
		timezoneId: 'Europe/Lisbon',
		country: { id: 'PT', geonameId: 2264397, name: 'Portugal' },
		adminDivision1: {
			id: 'PT.14',
			geonameId: 2267056,
			name: 'Lisbon District',
		},
		adminDivision2: {
			id: 'PT.14.1106',
			geonameId: 6458923,
			name: 'Lisbon Municipality',
		},
		score: 11.714165,
		coordinates: { latitude: 38.7167, longitude: -9.13333 },
	},
]
