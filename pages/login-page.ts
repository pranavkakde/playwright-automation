// login-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class SauceDemoLogin {
  page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly logoImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.logoImage = page.locator('#root > div > div.login_wrapper > div.login_wrapper-inner > div.bot_column');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login() {
    await expect(this.username).toBeVisible();
    await this.username.type('standard_user');
    await expect(this.password).toBeVisible();
    await this.password.type('secret_sauce');
    await expect(this.loginButton).toBeEnabled();
    await this.loginButton.click();
    await expect(this.page.locator('#header_container > div.header_secondary_container > span')).toBeVisible();
  }

  async pageLoaded() {
    await expect(this.logoImage).toBeVisible();
  }

}