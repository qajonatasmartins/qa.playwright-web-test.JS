import BasePage from "../base.page.js"

export default class BasicAuthPage extends BasePage {

    constructor(page) {
        super(page)
        this.btnBasicAuth = page.getByText('Basic Auth')
    }

    async clickBtnBasicAuth() {
        await super.goToUrl()
        await this.btnBasicAuth.click()
    }
}