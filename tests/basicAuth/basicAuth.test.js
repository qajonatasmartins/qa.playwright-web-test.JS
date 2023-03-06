import { test, expect } from '@playwright/test'
import BasicAuthPage from '../../pages/basicAuth/basicAuth.page';

test(`Login Basic`, async ({ page }) => {
    const basicAuthPage = new BasicAuthPage(page)
    await basicAuthPage.clickBtnBasicAuth()
    // await expect(page).toHaveTitle(/.*checkout/) // para quebrar o teste
})