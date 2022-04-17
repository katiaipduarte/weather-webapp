import { DEFAULT_COORDINATES } from '@constants/default-coordinates'
import { mockWeatherResponse } from '@mocks/weather-response.mock'
import fetch, { MockParams } from 'jest-fetch-mock'
import { getWeatherByCoords } from '../weather.service'

describe('Weather Service', () => {
	const abortController = new AbortController()

	beforeEach(() => {
		fetch.resetMocks()
	})

	test('returns result if it exists', () => {
		const responseInit: MockParams = {
			status: 200,
		}

		fetch.mockResponseOnce(JSON.stringify(mockWeatherResponse), responseInit)

		const onResponse = jest.fn()
		const onError = jest.fn()

		return getWeatherByCoords(
			DEFAULT_COORDINATES.lat,
			DEFAULT_COORDINATES.lon,
			abortController
		)
			.then(onResponse)
			.catch(onError)
			.finally(() => {
				expect(onResponse).toHaveBeenCalled()
				expect(onError).not.toHaveBeenCalled()
				expect(onResponse.mock.calls[0][0]).toEqual(mockWeatherResponse)
			})
	})

	test('throws Error: Resource Not found, if return response has status code 404', () => {
		const responseInit: MockParams = {
			status: 404,
		}

		fetch.mockResponseOnce(JSON.stringify({}), responseInit)
		const onResponse = jest.fn()
		const onError = jest.fn()

		return getWeatherByCoords(
			DEFAULT_COORDINATES.lat,
			DEFAULT_COORDINATES.lon,
			abortController
		)
			.then(onResponse)
			.catch(onError)
			.finally(() => {
				expect(onResponse).not.toHaveBeenCalled()
				expect(onError).toHaveBeenCalled()
				expect(onError.mock.calls[0][0].toString()).toBe(
					'Error: Resource Not found'
				)
			})
	})

	test('throws Error: An unexpected error has occurred, if return response has status code other than 404', () => {
		const responseInit: MockParams = {
			status: 500,
		}

		fetch.mockResponseOnce(JSON.stringify({}), responseInit)
		const onResponse = jest.fn()
		const onError = jest.fn()

		return getWeatherByCoords(
			DEFAULT_COORDINATES.lat,
			DEFAULT_COORDINATES.lon,
			abortController
		)
			.then(onResponse)
			.catch(onError)
			.finally(() => {
				expect(onResponse).not.toHaveBeenCalled()
				expect(onError).toHaveBeenCalled()
				expect(onError.mock.calls[0][0].toString()).toBe(
					'Error: An unexpected error has occurred'
				)
			})
	})
})
