import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page
    readonly btnLogin: Locator
    readonly inpSearch: Locator

    constructor(page: Page) {
        this.page = page;
        this.inpSearch = page.locator("#twotabsearchtextbox")
        this.btnLogin = page.locator("#continue")
    }

    public async setInpSearch(search: string) {
        await this.inpSearch.fill(search)
    }

    public async clickBtnLogin() {
        await this.btnLogin.click()
    }
}