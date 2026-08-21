import { logger } from './../utilities/logger';
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { TIMEOUTS } from '../constants/timeouts';
import { CourseData } from "../types/editCourse.types";

export class CourseManagementPage extends BasePage{
    readonly page:Page;
    readonly filterButton:Locator;      
    readonly categoryDropdown:Locator;
    readonly totalAutomationCourse:Locator;
    readonly courseList:Locator;
    readonly levelDropdown:Locator;
    readonly levelList:Locator;
    readonly addCourseStructureButton:Locator
    readonly searchbar:Locator;
    readonly table:Locator;
    readonly noUser:Locator;
    readonly current:Locator;
    readonly nxtbtn:Locator;
    readonly previousbtn:Locator;
    pageno!:Locator;

    readonly kebabButton:Locator
    readonly editCourseButton:Locator
    readonly courseClientDropDown:Locator
    readonly serviceTypeDropDown:Locator
    readonly serviceModelDropDown:Locator
    readonly courseCategoryDropDown:Locator
    readonly courseNameDropDown:Locator
    readonly courseLevelDropDown:Locator
    readonly uploadphotoButton:Locator
    readonly nextButton:Locator
    readonly saveLayoutButton:Locator
    readonly tostMsg:Locator
    readonly previewButton:Locator
    readonly dateSort:Locator
    readonly clientSort:Locator
    readonly courseSort:Locator
    readonly dateList:Locator
    readonly clientList:Locator
    readonly courseSortList:Locator
    

    constructor(page:Page){
        super(page);
        this.page=page;
        this.filterButton=this.page.locator("//div[@class='flex items-center gap-3 flex-shrink-0']/button[@data-slot='button']");
        this.categoryDropdown=this.page.locator("//option[text()='All Categories']/parent::select")
        this.totalAutomationCourse=this.page.locator("//span[@class='text-sm text-gray-600 dark:text-gray-400 font-medium']")
        this.courseList=this.page.locator("//div/span[@class='text-xs font-medium text-gray-700 dark:text-gray-300 font-sans']")
        this.levelDropdown=this.page.locator("//option[text()='All Levels']/parent::select")
        this.levelList=this.page.locator("//td/span/div/span/following-sibling::span")
        this.addCourseStructureButton=page.locator("(//span[text()='Add Course Structure'])[1]")
        //search
        this.searchbar = page.locator("//input[@data-slot='input']");
        this.table = page.locator("//tbody/tr[1]/td[3]/span/button/span[1]");
        this.noUser = page.getByText('No users found');
        //pagination
        this.nxtbtn =page.getByRole('button', {name:'Next'});
        this.current = page.locator("//button[contains(@class,'bg-blue-600')]");
        this.previousbtn = page.getByRole('button', {name:'Previous'});

        this.kebabButton = this.page.locator("//tbody/tr[1]/td[7]/span/div/div/child::*")
        this.editCourseButton = this.page.locator("//tbody/tr[1]/td[7]/span/div/div/div/child::button[2]")
        this.courseClientDropDown = this.page.getByRole('combobox').nth(0)
        this.serviceTypeDropDown = this.page.getByRole('combobox').nth(1)
        this.serviceModelDropDown = this.page.getByRole('combobox').nth(2)
        this.courseCategoryDropDown = this.page.getByRole('combobox').nth(3)
        this.courseNameDropDown = this.page.getByRole('combobox').nth(4)
        this.courseLevelDropDown = this.page.getByRole('combobox').nth(0)
        this.uploadphotoButton = this.page.locator('div').filter({ hasText: /^Choose Image$/ })
        this.nextButton = this.page.getByRole('button', { name: 'Next' })
        this.saveLayoutButton = this.page.getByRole('button', { name: 'Save Course Layout' })
        this.tostMsg = this.page.getByRole("alert").filter({ hasText: "Course updated successfully!" });
        this.previewButton =this.page.getByRole('button', { name: 'Preview & Update' })
        this.dateSort = this.page.locator("//th[1]/span")
        this.clientSort = this.page.locator("//th[2]/span")
        this.courseSort = this.page.locator("//th[3]/span")
        this.dateList = this.page.locator("//td[1]/span/div")
        this.clientList = this.page.locator("//td[2]/span/div")
        this.courseSortList = this.page.locator("//td[3]/span/div")

        
    }
    async clickFilterButton(){
        await this.Click(this.filterButton)
    }
    async selectCategory(category:string){
        await this.SelectOption(this.categoryDropdown,category)
    }
    async getTotalCount(){
        return await this.GetText(this.totalAutomationCourse)
    }
    async getCourseList(){
        return await this.GetAllText(this.courseList)
    }
    async selectLevel(level:string){
        await this.SelectOption(this.levelDropdown,level)
    }
    async getLevelList(){
        return await this.GetAllText(this.levelList)
    }
    async clickAddcourseStrcutureButton(){
        await this.Click(this.addCourseStructureButton)
    }
    //search
    async EnterSearch(searchbar: string) {
           await this.Fill(this.searchbar, searchbar);
           await this.page.waitForTimeout(TIMEOUTS.MEDIUM);
    }
    async GetSearchResult() {
        const text = await this.GetText(this.table);
        console.log("Row Text:", text);
        return text.trim();
    }
    async NoUserTxt(){
            return await this.GetText(this.noUser);
    }
    //pagination
    async clickNxtbtn(){
        await this.Click(this.nxtbtn);
    }
    async clickPrebtn(){
        await this.Click(this.previousbtn);
    }
    async CurrentPage(){
        return await this.GetText(this.current);
    }
    async clickPage(pageNo:string){
        this.pageno = this.page.locator(`//button[text()='${pageNo}']`);
        await this.Click(this.pageno);
    }


    //actions for editCourse Feature
    async clickKebabButton(){
        this.clickDateSort()
        await this.Click(this.kebabButton)
    }

    async clickEditCourse(){
        await this.Click(this.editCourseButton)
    }
    
    async clickNext(){
        await this.Click(this.nextButton)
    }

    async clickSaveLayout(){
        await this.Click(this.saveLayoutButton)
    }
    async clickPreview(){
        await this.Click(this.previewButton)
    }

    async fillFirstPage(data: CourseData) {

        await this.SelectCustomDropdown(this.courseClientDropDown,data.courseClient);
        await this.SelectCustomDropdown(this.serviceTypeDropDown,data.serviceType);
        await this.SelectCustomDropdown(this.serviceModelDropDown,data.serviceModel);
        await this.SelectCustomDropdown(this.courseCategoryDropDown,data.courseCategory);
        await this.SelectCustomDropdown(this.courseNameDropDown,data.courseName);
    }

    async fillSecondPage(data: CourseData){
        await this.SelectCustomDropdown(this.courseLevelDropDown,data.courseLevel);
    }

    // sort course actions
    async clickDateSort(){
        await this.Click(this.dateSort)
    }

    async clickClientSort(){
        await this.Click(this.clientSort)
    }

    async clickCourseSort(){
        await this.Click(this.courseSort)
    }

    async sortedlist(locator:Locator){
        const list = locator.allTextContents() 
        return list
    }

    
    
}