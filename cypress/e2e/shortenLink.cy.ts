import { inputPage } from '../Pages/InputPage'

describe('Shorten Link Input Tests', () => {
	beforeEach(() => {
		cy.openHomePage()
	})

	it('should not allow submission of empty link', () => {
		inputPage.validateErrorMessage()
	})

	it('should allow typing in the input', () => {
		inputPage.validateInput('https://wp.pl')
	})

	it('should shorten the link you entered', () => {
		inputPage.checkExistShortLink('https://wp.pl')
	})

	it('Copying a shortened link when you click a button', () => {
		inputPage.copyShortLink('https://wp.pl')
	})

	it('Clear the input field', () => {
		inputPage.clearInput('https://wp.pl')
	})

	it('checking whether the original link is displayed on the list after entering the link and clicking the shorten it button', () => {
		inputPage.displayLongLink('https://wp.pl')
	})
})
