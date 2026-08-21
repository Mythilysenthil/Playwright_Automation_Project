import {  When, Then } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { createServiceModel } from '../factories/service.factory';

const model = createServiceModel()

When(`the user clicks the service model button`, async function (this:CustomWorld) {
    await this.dfp.clickServiceModel()
});

When(`the user clicks on the add service button`, async function (this:CustomWorld) {
    await this.smp.clickAddService()
});

When(`the user enter the service Name and description`, async function (this:CustomWorld) {
    await this.smp.fillPage(model.serviceName,model.serviceDescription)
});

When(`clicks the create service button`, async function (this:CustomWorld) {
    await this.smp.clickCreateService()
});

Then(`the service created message is shown`, async function (this:CustomWorld) {
    await expect(this.smp.successMessage).toContainText("Service created successfully")
});

When(`the users searches for the service`, async function (this:CustomWorld) {
    await this.smp.searchService(model.serviceName)
});

When(`clicks the delete button`, async function (this:CustomWorld) {
    await this.smp.clickDelete()
});

When(`clicks delete on the confirmation`, async function (this:CustomWorld){
    await this.smp.clickInnerDelete()
});

Then(`the service is deleted`, async function (this:CustomWorld) {
    await expect(this.smp.confirmMsg).toContainText("Service deleted successfully")
});