//Inside your google-search.page.ts file. This is pageobject file.
/// <reference types="cypress" />

import { DashboardLocators } from "./dashboard.locators";
import { NavItem } from "./nav-item";

export class DashboardPage {
    /**
     * 
    */
    public navigateToMegamenu(navItem: NavItem) {
        cy.get(DashboardLocators.MegaMenuItem).eq(navItem).click()
    }

}