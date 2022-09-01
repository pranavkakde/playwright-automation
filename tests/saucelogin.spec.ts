import { test } from '@playwright/test';
import { SauceDemoLogin } from '../pages/login-page';


test('Login into SauceDemo', async ({ page }) => {
    const sauceLoginPage = new SauceDemoLogin(page);
    await sauceLoginPage.goto();
    await sauceLoginPage.pageLoaded();
    await sauceLoginPage.login();
  });