export type PlacesResponse = {
	id: string
	geonameId?: number
	type: string
	name: string
	population: number
	elevation: number
	timezoneId: string
	geonamesUpdatedAt?: string
	createdAt?: string
	updatedAt?: string
	country: CountryDto
	adminDivision1: CountryDto
	adminDivision2: CountryDto
	score: number
	coordinates: CoordsDto
}

export interface CountryDto {
	id: string
	geonameId: number
	name: string
}
export interface CoordsDto {
	latitude: number
	longitude: number
}
