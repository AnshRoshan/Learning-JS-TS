import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import SimpleTest from '../components/SimpleTest'

describe('Check if the Vitest is working', () => {
	it('should return true', () => {
		expect(true).toBe(true)
	})

	it('GetByTest the element in the component', () => {
		render(<SimpleTest username={'@ansh'} age={22} email={'anshroshan@gmail.com'} />)
		// screen.debug()
		const elements = screen.getAllByText(/ansh/)
		elements.forEach((element) => {
			expect(element).toBeInTheDocument()
		})
	})

	it('QueryByTest the element in the component', () => {
		render(<SimpleTest username={'@ansh'} age={22} email={'anshroshan@gmail.com'} />)
		const elements = screen.queryAllByText(/ansh78/)
		// expect(elements.length).toBeGreaterThan(1)
		elements.forEach((element) => {
			expect(element).toBeInTheDocument()
		})
	})

	// using the query to check if the elwmwnt is not present in the component
	it('QueryByTest the element not to be present in the component', () => {
		render(<SimpleTest username={'@ansh'} age={22} email={'anshroshan@gmail.com'} />)
		expect(screen.queryByText(/ansh78/)).not.toBeInTheDocument()
		// const elements = screen.queryAllByText(/ansh78/)
		// expect(elements.length).toBe(0)
	})

	it('FindBy Test the element in the component', async () => {
		render(<SimpleTest username={'@ansh'} age={22} email={'ansh@test.com'} />)
		expect(await screen.findByText(/ansh@test/, {}, { timeout: 7000 })).toBeInTheDocument()
	})

	it('Snapshot testing : Simpletest', () => {
		const result = render(<SimpleTest username={'@ansh'} age={22} email={'anshroshan@gmail.com'} />)
		expect(result.container).toMatchSnapshot()
	})
})
