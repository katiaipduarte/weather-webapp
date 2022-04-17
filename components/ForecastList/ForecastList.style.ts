import styled from 'styled-components'

export const List = styled.section`
	display: flex;
	flex-flow: row;
	color: white;

	.forecast-column {
		margin-right: 2.5rem;
		text-align: center;

		.weekday {
			font-weight: 600;
		}

		.icon-image {
			margin-top: 8px !important;
		}

		.weather-temp {
			font-size: 0.5rem;

			.label {
				font-weight: 500;
				text-transform: uppercase;
				font-size: 0.5rem;
			}
		}
	}

	// width: 50%;
	// margin: 0 auto;
	// border-radius: 5rem;
	// background-color: rgba(0, 0, 0, 0.45);
	// line-height: 1;
	// -webkit-backdrop-filter: blur(10px);
	// backdrop-filter: blur(10px);
	// max-width: 50%;
	// padding: 10rem;
	// margin-top: 30rem;
	// .flex-forecast {
	// 	display: flex;
	// 	justify-content: space-between;
	// 	padding: 5rem 0;
	// 	.weather-forecast-info {
	// 		span {
	// 			margin-left: 10rem;
	// 		}
	// 	}
	// }
`
