class InputPage {
	get input() {
		return cy.get('.input')
	}

	get button() {
		return cy.get('.btn-shorten')
	}

	get errorMessage() {
		return cy.get('.error')
	}

	get buttonCopy() {
		return cy.get('.btn-copy')
	}

	get buttonCopied() {
		return cy.get('.btn-copy copied ')
	}

	get shortLink() {
		return cy.get('.short-link')
	}

	get longLink() {
		return cy.get('.long-link')
	}

	
	public validateErrorMessage() {
		this.button.click()
		this.errorMessage.should('contain', 'Please provide a URL to shorten')
	}

	
	public validateInput(link: string) {
		this.input.type(link).should('have.value', link)
	}


	public clearInput(link: string) {
		this.input.type(link).clear()
	}


	public checkExistShortLink(link: string) {
		this.input.type(link)
		this.button.click()
		this.shortLink.should('be.visible')
		this.shortLink.should('contain', 'https://tinyurl.com/55s2p2cr')
	}


	public displayLongLink(link: string) {
		this.input.type(link)
		this.button.click()
		this.longLink.should('be.visible') 
	}

	public copyShortLink(link: string) {
		this.input.type(link)
		this.button.click()
		this.buttonCopy.should('be.visible')
		this.buttonCopy.click()
		cy.get('.btn-copy copied').should('contain', 'Copied!')
	
	}
}

export const inputPage: InputPage = new InputPage()
