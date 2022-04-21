import { fireEvent, render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('<Navbar /> component Unit Test', () => {
	it('should render 1 <Navbar /> component', () => {
		const { container } = render(<Navbar />)
		expect(container).toMatchSnapshot()
	})

	it('should add active to className in ul, when clicking the faBars icon', () => {
		render(<Navbar />)

		const menuBtn = screen.getByTestId('menu-btn')
		const menu = screen.getByTestId('menu')

		expect(menuBtn).toBeTruthy()
		expect(menu.className).toBe('menu')

		fireEvent.click(screen.getByTestId('mobile-menu-btn'))
		expect(menu.className).toBe('menu active')
	})
})
