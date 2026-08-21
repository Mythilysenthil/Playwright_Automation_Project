import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {validdata} from "../test-data/login.json"
import { CustomWorld } from "../world/CustomWorld";
import { TIMEOUTS } from "../constants/timeouts";
Given("the user is on the login page", async function (this: CustomWorld) {
    await this.lp.Navigatepage();
});

When("the user enters valid credentials", async function (this: CustomWorld) {
  await this.lp.enteremail(validdata.email);
  await this.lp.enterPassword(validdata.password);
});
When("the user clicks on the login button", async function (this: CustomWorld) {
    await this.lp.clickLoginButton();
});
Then("the user should be redirected to the dashboard page", async function (this: CustomWorld) {
    await this.adp.profileclick();
    await expect(this.adp.getuseremail()).toHaveText("Testing course", {
       timeout: TIMEOUTS.MEDIUM
    });
    await this.page.keyboard.press('Escape');
    await this.adp.signout.waitFor({ state: 'hidden', timeout: TIMEOUTS.MEDIUM }).catch(() => {});
});
When(
  "the user enters {string} and {string}",
  async function (this: CustomWorld, username: string, password: string) {
    await this.lp.enteremail(username);
    await this.lp.enterPassword(password);
  }
);

Then("an {string} should be displayed", async function (this: CustomWorld, errorMessage: string) {
   const locator = this.lp.getErrorMessagefun();


await expect(locator).toHaveText(errorMessage,{
    timeout: TIMEOUTS.LONG
});

});

When("the user clicks the profile icon in the admindashboardpage",async function(this:CustomWorld){

    await this.adp.profileclick()

});

When("the user clicks the Signout option",async function(this:CustomWorld){

    await this.adp.ClickSignOutButton()

});

Then("the user should see the login page",async function(this:CustomWorld){

    await expect(this.lp.loginbutton).toBeVisible({timeout:TIMEOUTS.LONG});

});
