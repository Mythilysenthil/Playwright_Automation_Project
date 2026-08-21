import { AddcoursePage } from './../pages/AddcoursePage';
import { dynamicFieldManagementPage } from './../pages/dynamicFieldManagementPage';
import { CourseCategoryPage } from './../pages/CourseCategoryPage';
import { logger } from './../utilities/logger';
import {Browser,Page,BrowserContext} from 'playwright'
import {setWorldConstructor, World} from '@cucumber/cucumber'
import { loginpage } from '../pages/loginpage';
import { BasePage } from '../pages/BasePage';
import { admindashboardpage } from '../pages/admindashboardpage';
import { CourseManagementPage } from '../pages/CourseManagementPage';
import { pedagogy_dynamic_page } from '../pages/pedagogy_dynamic_page';
import { AddCourseStructurePage } from '../pages/AddCourseStructurePage';
import { serviceModelPage } from '../pages/serviceModelPage';
import { QuestionBankPage } from '../pages/QuestionBankPage';

export class CustomWorld extends World{
    browser!:Browser;
    browserContext!:BrowserContext;
    page!:Page;
    addPage!:AddcoursePage;
    logger=logger;
    bp!:BasePage;
    lp!:loginpage;
    adp!:admindashboardpage;
    dfp!:dynamicFieldManagementPage
    courseCategoryPage!:CourseCategoryPage;
    cmp!:CourseManagementPage;
    pdp!:pedagogy_dynamic_page;
    acsp!:AddCourseStructurePage
    smp!: serviceModelPage
    qbp!:QuestionBankPage
}

setWorldConstructor(CustomWorld);