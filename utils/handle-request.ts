import { toast } from 'react-toastify'

export const handleRequest = (response: Response) => {
	if (!response.ok) {
		if (response.status === 404) {
			toast.error('Resource Not found')
			throw new Error('Resource Not found')
		}
		toast.error('An unexpected error has occurred')
		throw new Error('An unexpected error has occurred')
	}

	return response.json()
}
