export default class BasePage {

    constructor(page) {
        this.page = page
    }

    async goToUrl() {
        await this.page.goto(`/`)
    }
}