import { Before,After,BeforeAll,AfterAll,setDefaultTimeout} from '@cucumber/cucumber'
import{chromium,Browser} from '@playwright/test'
import{CustomWorld}from '../world/CustomWorld'
import {logger}from '../utilities/logger'
import { BasePage } from '../pages/BasePage'
import { loginpage } from '../pages/loginpage'
import { admindashboardpage } from '../pages/admindashboardpage'
import { AddcoursePage } from '../pages/AddcoursePage'
import { CourseCategoryPage } from '../pages/CourseCategoryPage'
import { dynamicFieldManagementPage } from '../pages/dynamicFieldManagementPage'
import { CourseManagementPage } from '../pages/CourseManagementPage'
import { pedagogy_dynamic_page } from '../pages/pedagogy_dynamic_page'
import { serviceModelPage } from '../pages/serviceModelPage'
import { AddCourseStructurePage } from '../pages/AddCourseStructurePage'
import { QuestionBankPage } from '../pages/QuestionBankPage'

let browser : Browser
setDefaultTimeout(90 * 1000);
BeforeAll(async()=>{
    logger.info("Launching Browser")
    browser = await chromium.launch({headless:false})
})

Before(async function(this:CustomWorld,scenario){
    logger.info(`Starting scenario: ${scenario.pickle.name}`)
    this.browser=browser
    this.browserContext=await browser.newContext({
       //viewport: { width: 1920, height: 1080 }
    })
    this.page = await this.browserContext.newPage()
    this.bp = new BasePage(this.page);
    this.lp = new loginpage(this.page);
    this.adp = new admindashboardpage(this.page);
    this.dfp = new dynamicFieldManagementPage(this.page);
    this.courseCategoryPage=new CourseCategoryPage(this.page);
    this.addPage = new AddcoursePage(this.page);
    this.cmp= new CourseManagementPage(this.page);
    this.pdp = new pedagogy_dynamic_page(this.page);
    this.adp= new admindashboardpage(this.page);
    this.addPage = new AddcoursePage(this.page);
    this.cmp= new CourseManagementPage(this.page);
    this.acsp=new AddCourseStructurePage (this.page);
    this.smp = new serviceModelPage(this.page)
    this.qbp = new QuestionBankPage(this.page)
})

After(async function(this:CustomWorld,scenario){
    if(scenario.result?.status==="FAILED"){
        const path =`reports/screenshots/${scenario.pickle.name}_${Date.now()}.png`
        await this.page.screenshot({path})
        logger.error(`Scenario Failed: ${scenario.pickle.name}`)
        logger.error(`Reason: ${scenario.result.message}`)
        logger.error(`Screenshot saved: ${path}`)
    }else{
        logger.info(`Scenario Passed: ${scenario.pickle.name}`)
    }

    await this.page.close()
    await this.browserContext.close()
})


AfterAll(async()=>{
    logger.info("Closing browser")
    await browser.close()
})
