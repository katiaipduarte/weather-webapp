import styled from 'styled-components'

export const NavbarContainer = styled.header`
	.menu {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;

		.menu {
			position: relative;

			li {
				a {
					display: block;
					padding: 0 0.5rem;
					text-decoration: none;
				}
			}
		}

		.toggle {
			padding: 1.5rem 1rem;
			order: 1;
			a {
				svg {
					color: white;
					mix-blend-mode: difference;
					height: 1.5rem;
					font-size: 2rem;
				}
			}
		}

		.logo {
			color: white;
			mix-blend-mode: difference;
			padding: 1.5rem 1rem;
		}

		.item,
		.mobile-item {
			color: white;
			padding: 1rem;
			order: 3;
			width: 100%;
			text-align: center;
			display: none;
			font-size: 1.25rem;
		}
	}

	.active {
		.item {
			display: none;
		}

		.mobile-menu {
			position: absolute;
			top: 4rem;
			left: 0;
			right: 0;
			z-index: 2;
			background-color: rgba(0, 0, 0, 0.95);
			-webkit-backdrop-filter: blur(10px);
			backdrop-filter: blur(10px);

			.mobile-item {
				display: block;
			}
		}
	}

	/* Tablet menu */
	@media all and (min-width: 700px) {
		.menu {
			justify-content: center;
			.logo {
				flex: 1;
			}
			.toggle {
				flex: 1;
				text-align: right;
				order: 2;
			}
		}

		.mobile-menu {
			display: none !important;
		}
	}

	/* Desktop menu */
	@media all and (min-width: 960px) {
		.menu {
			align-items: flex-start;
			flex-wrap: nowrap;
			background: none;
			.logo {
				order: 0;
			}
			.item {
				order: 1;
				position: relative;
				display: block;
				width: auto;
				font-size: 1rem;
				border: none;
			}
			.toggle {
				display: none;
			}
		}
	}
`
