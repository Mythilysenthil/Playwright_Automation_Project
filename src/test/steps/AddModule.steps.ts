import { When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { CsvReader } from "../utilities/csvReader";
import { CourseStructureData } from "../types/courseStructure.types";
import { ExcelReader } from "../utilities/ExcelReader";
import { EditModuleData } from "../types/editModule.types";
const editModuleData=ExcelReader.read<EditModuleData>("editModule.xlsx","edit");
const courseData = CsvReader.read<CourseStructureData>("moduleData.csv");
When('search the course name', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  const data=editModuleData[0];
  await this.cmp.EnterSearch(data?.search!);
});
When('the user clicks the Add Course Structure button on the Course Management page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.cmp.clickAddcourseStrcutureButton();
});


When('the user clicks the Module button on the Course Structure page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.clickModuleButton();
});

When('the user fills all the basic information', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
    const data = courseData[0];
    await this.acsp.setTitle(data?.Title!);
    await this.acsp.setDescription(data?.Description!);
});

When('the user clicks the Create & Save button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.clicksaveButton();
});

Then("the user should see the message Operation completed successfully",
  async function (this: CustomWorld) {
    const data = courseData[0];
    await expect(this.acsp.operationCompleted).toContainText(data?.SuccessMessage!,{ timeout: 30000 });  }
);
When('the user fills all the invalid basic information', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.setTitle("")
});

Then("the user should see the validation message Title is required for module",async function (this: CustomWorld) {
    const data = courseData[0];
    const actualMessage = await this.acsp.getTitleRequired();
    expect(actualMessage).toBe(data?.TitleRequiredMessage!);
  }
);


When('the user clicks the Similar Course button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.clickSimilarCourse();
});

When('the user selects the course category and the user searches for the course to duplicate', async function (this:CustomWorld,dataTable:DataTable) {
  // Write code here that turns the phrase above into concrete actions
  const data=dataTable.rowsHash();
  await this.acsp.clickAllCourses();
  await this.acsp.selectFilterCategory(data.category!);
  await this.acsp.setCourseName(data.search_keyword!)
});

When('the user selects all modules and clicks the Duplicate Structure button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.clcikLevels();
  await this.acsp.clickDuplicateStructure();
});

When('the user accepts the duplicate confirmation alert', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.clickConfirm();
});
When('the user clicks the more dropdown on the Course Structure page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.clickMoreButton();
});

When('select the Hierarchy Actions and select the more button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.clickHierarchyActions();
  await this.acsp.normalClick();
});

When('click the three dots on the module and select the edit option', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.clickThreeDots();
  await this.acsp.clickEditOption();
});

When('the user updates the module details and clicks the save button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  const data=editModuleData[0];
  await this.acsp.setTitle(data?.updateTitle!);
  await this.acsp.setDescription(data?.description!);
  await this.acsp.clicksaveButton();
});
When('the user selects {string} from the Teaching Elements dropdown', async function (this:CustomWorld,string: string) {
  //Write code here that turns the phrase above into concrete actions
  await this.acsp.clickTeachingElementsDropdown();
  await this.acsp.selectTeachingElement(string);
});

Then('only {string} details should be displayed', async function (this:CustomWorld,string: string) {
  // Write code here that turns the phrase above into concrete actions
  if(string === "All Teaching Elements") {
    const actualText = await this.acsp.GetText(this.acsp.allTeachingElements);
    expect(actualText).toBe(string);
  }
  else if(string === "I Do Activities") {
    const actualText = await this.acsp.GetText(this.acsp.iDoActivities);
    expect(actualText).toBe(string);
  }
  else if(string === "We Do Activities") {
    const actualText = await this.acsp.GetText(this.acsp.weDoActivities);
    expect(actualText).toBe(string);
  }
  else if(string === "You Do Activities") {
    const actualText = await this.acsp.GetText(this.acsp.youDoActivities);
    expect(actualText).toBe(string);
  }
});