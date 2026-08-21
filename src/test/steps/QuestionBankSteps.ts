import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';
import { expect } from '@playwright/test';


When('the user clicks on the Question Bank option from the Admin Dashboard page', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.adp.ClickQuestionBank();
});

When('the user clicks the Create Question Bank dropdown', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.clickCreateQuestionBankDropdown();
});

When('the user selects the MCQ Question option', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.clickMCQOption();
});

When('the user enters the category Data Structures and fill the question', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.fillCategorySearchBox("Data Structures");
   await this.qbp.fillMCQQuestion("What is the time complexity of inserting an element at the beginning of a linked list?");
});

When('the user enters Stack as Option one', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.fillOption1("Stack");
});

When('the user enters Queue as Option two', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.fillOption2("Queue");

});

When('the user clicks the Add Option button', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
    await this.qbp.clickAddOptionButton();
});

When('the user enters Linked List as Option three', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.fillOption3("Linked List");
});

When('the user opens the Answer Key', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.clickAnswerKey();
});

When('the user selects the first answer option', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.clickAnswerRadioButton();
});

When('the user clicks the Done button', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.clickDoneButton();
});

When('the user clicks the Save Question button', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.clickSaveQuestionButton();
});

Then('the question should be saved successfully', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.questionSaved.waitFor({state:"visible",timeout:30000});
});
When('the user enters the category Data Structures', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
   await this.qbp.fillCategorySearchBox("Data Structures");
});

Then('the question required validation message should be displayed', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.qbp.questionRequiredError.waitFor({state:"visible",timeout:30000});
});

When('the user selects the Programming Question option', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.qbp.clickProgrammingQuestion();
});

When('the user enters the program title', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.qbp.setQuestionBankTile("Java")
});

When('the user enters the question description', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.qbp.setDescription("Odd or even Program")
});

When('the user enters the test case and expected outcome', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.qbp.setInput("3");
  await this.qbp.setOutput("Odd")
});

When('the user clicks the Save Question Button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.qbp.clickCreateQuestion();
});

Then('the question should be created successfully', async function (this: CustomWorld) {
  await expect(this.qbp.questionCreatedSuccessfully).toBeVisible();
});