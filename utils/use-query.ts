import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

// Resolves query or returns null
const useQuery = (): ParsedUrlQuery | null => {
	const router = useRouter()
	const hasQueryParams =
		/\[.+\]/.test(router.route) || /\?./.test(router.asPath)
	const ready = !hasQueryParams || Object.keys(router.query).length > 0
	if (!ready) return null
	return router.query
}

export default useQuery
