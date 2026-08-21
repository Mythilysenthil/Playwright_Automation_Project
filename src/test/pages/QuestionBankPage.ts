import { Locator, Page } from "@playwright/test"
import { BasePage } from "./BasePage"

export class QuestionBankPage extends BasePage {
    readonly page: Page
    readonly createQuestionBankDropdown: Locator
    readonly mcqOption: Locator
    readonly categorySearchBox: Locator
    readonly option1: Locator
    readonly option2: Locator
    readonly addOptionButton: Locator;
    readonly option3: Locator;
    readonly doneButton:Locator;
    readonly saveQuestionButton:Locator;
    readonly answerRadioButton: Locator;
    readonly answerKey: Locator;
    readonly questionSaved:Locator;
    readonly mcqQuestion:Locator
    readonly questionRequiredError:Locator;
    readonly questionBankTitle:Locator
    readonly questionDescription:Locator
    readonly input:Locator
    readonly output:Locator
    readonly createQuestionButton:Locator
    readonly programmingQuestion:Locator
    readonly questionCreatedSuccessfully:Locator
    constructor(page: Page) {
        super(page)
        this.page = page
        this.createQuestionBankDropdown = this.page.locator("//button[@class='inline-flex items-center px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700']")
        this.mcqOption = this.page.locator("//button[normalize-space()='MCQ Question']")
        this.categorySearchBox = this.page.locator("//input[@placeholder='e.g., Data Structures']")
        this.option1 = this.page.locator("(//input[@placeholder='Click to edit option'])[1]")
        this.option2 = this.page.locator("(//input[@placeholder='Click to edit option'])[2]")
        this.addOptionButton = this.page.locator("//button[@class='text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1']")
        this.option3 = this.page.locator("(//input[@placeholder='Click to edit option'])[3]")
        this.doneButton=this.page.locator("//button[@class='px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700']")
        this.saveQuestionButton=this.page.locator("//button[@class='px-6 py-2 text-white rounded-xl text-xs font-bold disabled:opacity-50 flex items-center gap-1.5 transition-all bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-700 dark:to-emerald-600 hover:opacity-90']")
        this.answerRadioButton=this.page.locator("(//span[@class='flex-1 text-left '])[1]")
        this.answerKey=this.page.locator("//button[normalize-space()='Answer key']")
        this.questionSaved=this.page.locator("//div[@class='px-3 py-2 rounded-lg text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300']")
        this.mcqQuestion=this.page.locator("//div[@contenteditable='true']")
        this.questionRequiredError=this.page.locator("//div[@class='mt-2 text-red-600 dark:text-red-400 text-xs flex items-center gap-1.5 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-xl']")
        this.questionBankTitle=this.page.locator("//input[@placeholder='Type your problem title here...']")
        this.questionDescription=this.page.locator("//textarea[@placeholder='Describe the problem clearly. Include input/output format and examples.']")
        this.input=this.page.locator("//textarea[@placeholder='stdin...']")
        this.output=this.page.locator("//textarea[@placeholder='expected stdout...']")
        this.createQuestionButton=this.page.locator("//button[contains(text(),'✓ Create Question')]")
        this.programmingQuestion=this.page.locator("//button[normalize-space()='Programming Question']")
        this.questionCreatedSuccessfully=this.page.locator("//div[@class='px-3 py-2 rounded-lg text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300']")
    }
    async clickCreateQuestionBankDropdown() {
        await this.Click(this.createQuestionBankDropdown);
    }
    async clickMCQOption() {
        await this.Click(this.mcqOption);
    }
    async fillCategorySearchBox(category: string) {
        await this.Fill(this.categorySearchBox, category);
    }
    async fillOption1(option: string) {
        await this.Fill(this.option1, option);
    }
    async fillOption2(option: string) {
        await this.Fill(this.option2, option);
    }
    async clickAddOptionButton() {
        await this.Click(this.addOptionButton);
    }
    async fillOption3(option: string) {
        await this.Fill(this.option3, option);
    }   
    async clickDoneButton() {
        await this.Click(this.doneButton);
    }
    async clickSaveQuestionButton() {
        await this.Click(this.saveQuestionButton);
    }
    async clickAnswerRadioButton() {
        await this.Click(this.answerRadioButton);
    }
    async clickAnswerKey() {
        await this.Click(this.answerKey);
    }
    async getQuestionSavedText() {
        return await this.GetText(this.questionSaved);
    }
    async fillMCQQuestion(question: string) {
        await this.Fill(this.mcqQuestion, question);
    }
    async setQuestionBankTile(title:string){
        await this.Fill(this.questionBankTitle,title)
    }
    async setDescription(description:string){
        await this.Fill(this.questionDescription,description)
    }
    async setInput(input:string){
        await this.Fill(this.input,input)
    }
    async setOutput(op:string){
        await this.Fill(this.output,op)
    }
    async clickCreateQuestion(){
        await this.Click(this.createQuestionButton)
    }
    async clickProgrammingQuestion(){
        await this.Click(this.programmingQuestion)
    }
}