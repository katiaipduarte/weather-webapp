export const handleRequest = (response: Response) => {
	if (!response.ok) {
		if (response.status === 404) {
			throw new Error('Resource Not found')
		}
		throw new Error('An unexpected error has occurred')
	}

	return response.json()
}
