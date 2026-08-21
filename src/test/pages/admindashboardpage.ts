import{Page,Locator} from "@playwright/test"
import { BasePage } from "./BasePage"
import { TIMEOUTS } from "../constants/timeouts";

export class admindashboardpage extends BasePage{
    readonly page:Page
    readonly profileavatar:Locator
    readonly dashboardtext:Locator
    readonly dynamicFieldManagaement:Locator
    readonly coursemanagementlink:Locator
    readonly signOutButton : Locator
    readonly recentTab:Locator
    readonly leftArrow:Locator
    readonly dynRec: Locator
    readonly AdmRec: Locator
    readonly signout: Locator
    
    constructor(page:Page){
        super(page)
        this.page=page
        this.profileavatar=this.page.locator("//span[@data-slot='avatar']/ancestor::button")
        this.dashboardtext=this.page.locator("//div[@class='flex flex-col']/child::p[1]")
        this.recentTab= this.page.locator("//h1");
        this.dynamicFieldManagaement = this.page.locator("//div[@class='pt-6']/child::div/child::div[3]");
        this.coursemanagementlink = this.page.locator("//div[@title='Course Management']");
        this.signOutButton = this.page.locator("//div[@role='menuitem'][4]");
        this.leftArrow = this.page.locator("(//button[@data-slot='button'])[6]");
        this.dynRec = this.page.locator("//div[@class='mt-2']/div[1]/child::*[1]/child::*[2]");
        this.AdmRec = this.page.locator("//div[@class='mb-4']/div[2]/div[2]/div/span");
        this.signout = this.page.getByRole('menuitem', { name: /sign out/i });
    }
    async profileclick(){
        let isVisible = await this.signout.isVisible().catch(() => false);
        if (!isVisible) {
            await this.Click(this.profileavatar);
            isVisible = await this.signout.isVisible({ timeout: TIMEOUTS.SHORT }).catch(() => false);
        }
        if (!isVisible) {
        // menu didn't open on first attempt — retry once
        await this.Click(this.profileavatar);
        }
        await this.signout.waitFor({ state: 'visible', timeout: TIMEOUTS.LONG });
    }

     getuseremail(){
        return this.dashboardtext
    }

    async dynamicFieldManagementClick(){
        await this.Click(this.dynamicFieldManagaement);
    }
    
    async clickcoursemanagementlink(){
        await this.coursemanagementlink.waitFor({
        state: "visible",
        timeout: TIMEOUTS.LONG
    });
    await this.Click(this.coursemanagementlink);
    }
    
    async ClickSignOutButton(){
        await this.Click(this.signOutButton);
    }

    //recent
    async adminPagevisible(){
        return await this.GetText(this.recentTab);
    }

    async ClickLeftarrow(){
        await this.Click(this.leftArrow);
    }

    async RecentActivity(){
        return await this.GetText(this.dynRec);
    }

    async PreviousActivity(){
        return await this.GetText(this.AdmRec);
    }
    
    //logout
    async SignoutButton(){
        await this.Click(this.signout);
    }
}
