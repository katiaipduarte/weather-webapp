import CustomErrorLayout from '@components/templates/CustomErrorLayout/CustomErrorLayout'

const NotFoundPage = (): JSX.Element => {
	return (
		<>
			<CustomErrorLayout errorCode={404} message='Page requested not found.' />
		</>
	)
}

export default NotFoundPage
