import styled from 'styled-components'

export const List = styled.section`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: 1fr 1fr;
	color: white;
	background-color: rgba(0, 0, 0, 0.35);
	width: fit-content;
	padding: 1rem;
	border-radius: 1rem;
	margin: 5rem auto 0;

	.forecast-column {
		align-items: center;
		display: flex;
		justify-content: center;
		cursor: pointer;
		position: relative;

		.weekday {
			font-weight: 400;
		}

		.weather-temp {
			font-size: 0.65rem;

			.label {
				font-weight: 500;
				text-transform: uppercase;
				font-size: 0.5rem;
			}
		}
	}

	@media all and (min-width: 960px) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		margin: 2.5rem 2.5rem 0;
		float: left;

		.forecast-column {
			display: block;
			text-align: center;
			.icon-image {
				margin-top: 8px !important;
			}
		}
	}
`
