export const convertUnixTimestampToWeekday = (
	unix_timestamp: number
): string => {
	const date = new Date(unix_timestamp * 1000)

	return date.toLocaleDateString(undefined, { weekday: 'long' })
}
