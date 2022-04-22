import styled from 'styled-components'

export const WeatherInfoContainer = styled.section`
	display: flex;
	align-items: end;
	line-height: 5rem;
	flex-flow: row;
	color: white;
	margin: 5rem auto 0;

	h2 {
		margin-right: 1.5rem;
		font-weight: 500;
	}

	.location-current-weather {
		position: relative;
		margin-right: 1.75rem;

		.location-column {
			line-height: 1.75rem;

			h3 {
				letter-spacing: -0.1rem;
				font-weight: 400;
			}
		}
	}

	.weather-column {
		line-height: 23px;

		.icon-image {
			margin-bottom: -10px !important;
		}

		p {
			margin-bottom: 4px;
		}
	}

	@media (min-width: 960px) {
		margin: 0 2.5rem !important;
	}
`
