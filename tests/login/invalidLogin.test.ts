import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page/login/login.page';

let loginPage: LoginPage
test.beforeEach('', async ({ page }) => {
    loginPage = new LoginPage(page);
})
test('should login invalid amazon', async ({ page }) => {
    await page.goto('/');
    await loginPage.setInpSearch('base em conhecimento em teste de software')
    await page.screenshot()
});