import {When, Then } from '@cucumber/cucumber';
import { CustomWorld } from "../world/CustomWorld";
import { expect } from '@playwright/test';
import { logger } from "../utilities/logger";

When(`the user clicks on the logout button`, async function (this: CustomWorld){
    await this.adp.profileclick();
    await this.adp.SignoutButton();
    logger.info('Logout button clicked successfully');
});

Then(`the user should be redirected to the login page`, async function (this: CustomWorld){
    //await this.page.pause();
    await expect(this.page).toHaveURL('https://lms-smartcliff.vercel.app/login');
    logger.info('User is successfully redirected to the login page');
});

Then(`the login page should be displayed`, async function (this: CustomWorld){
    await expect(this.lp.email).toBeVisible();
    logger.info('Login page is displayed successfully');
});