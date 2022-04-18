import { fireEvent, render, screen } from '@testing-library/react'
import 'jest-styled-components'
import SearchBar from './SearchBar'

describe('<SearchBar /> component Unit Test', () => {
	it('should render Searchbar', () => {
		const { container } = render(<SearchBar />)
		expect(container).toMatchSnapshot()
	})

	it('should render 1 <SearchBar /> component', () => {
		render(<SearchBar />)
		expect(screen.getByRole('searchbox')).toBeInTheDocument()
	})

	it('should not show clear button if input is empty', () => {
		render(<SearchBar />)
		const searchInput = screen.getByPlaceholderText(
			'Another location'
		) as HTMLInputElement
		expect(searchInput.value).toBe('')
		expect(
			screen.getByLabelText('Click to clear search').style.visibility
		).toBe('hidden')
	})

	it('should show clear button if input is not empty', () => {
		render(<SearchBar />)
		const searchInput = screen.queryByPlaceholderText(
			'Another location'
		) as HTMLInputElement
		fireEvent.change(searchInput, { target: { value: 'test' } })
		expect(searchInput.value).toBe('test')
		expect(
			screen.getByLabelText('Click to clear search').style.visibility
		).toBe('initial')
	})

	it('should hide the clear button on click', () => {
		render(<SearchBar />)
		const clearBtn = screen.getByLabelText('Click to clear search')
		expect(clearBtn.style.visibility).toBe('hidden')

		const searchInput = screen.queryByPlaceholderText(
			'Search comics by character'
		) as HTMLInputElement
		fireEvent.change(searchInput, { target: { value: 'test' } })
		expect(clearBtn.style.visibility).toBe('initial')

		fireEvent.click(clearBtn)

		expect(clearBtn.style.visibility).toBe('hidden')
	})

	it('should render an input of type text and allows at max 50 char', () => {
		render(<SearchBar />)
		const searchInput = screen.queryByPlaceholderText(
			'Search comics by character'
		) as HTMLInputElement
		expect(searchInput.type).toBe('text')
		expect(searchInput.maxLength).toBe(50)

		const validInput = 'ygevhodxbvbaqzpflfkoylzhkbcerwmkavypauvvdwpeunagmq'
		fireEvent.change(searchInput, { target: { value: validInput } })

		expect(validInput).toHaveLength(50)
		expect(searchInput.value).toBe(validInput)

		fireEvent.keyDown(searchInput, { key: 'a' })
		expect(searchInput.value).toBe(validInput)
	})
})
