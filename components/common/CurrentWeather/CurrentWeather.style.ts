import styled from 'styled-components'

export const WeatherInfoContainer = styled.section`
	display: flex;
	align-items: end;
	line-height: 5rem;
	flex-flow: row;
	color: white;
	margin-top: 50vh;
	margin: 55vh 0 5vh 0;
	position: relative;
	width: 50%;

	h2 {
		margin-right: 1.5rem;
		font-weight: 500;
	}

	.location-column {
		margin-right: 1.5rem;
		line-height: 1.75rem;
		z-index: 999;

		h3 {
			letter-spacing: -0.1rem;
			font-weight: 400;
		}
	}

	.weather-column {
		line-height: 23px;
		z-index: 999;

		.icon-image {
			margin-bottom: -10px !important;
		}
	}
`
