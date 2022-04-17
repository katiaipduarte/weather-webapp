import Home from '@pages/index'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

// Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = ({ theme }) =>
	render(
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	)
describe('Home', () => {
	it('renders homepage unchanged', () => {
		// Render new instance in every test to prevent leaking state
		const { container } = renderComponent({ theme: theme })

		expect(container).toMatchSnapshot()
	})

	it('renders a heading', () => {
		renderComponent({ theme: theme })

		const heading = screen.getByRole('heading', {
			name: 'My page',
		})

		expect(heading).toBeInTheDocument()
	})
})
