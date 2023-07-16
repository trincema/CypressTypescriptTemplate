//This is spec file, inside your google-search.spec.ts
import { DashboardLocators } from "../../support/page-objects/dashboard/dashboard.locators";
import { DashboardPage } from "../../support/page-objects/dashboard/dashboard.page";
import { NavItem } from "../../support/page-objects/dashboard/nav-item";

import check from "../../support/do-view-check-wait/check";
import wait from "../../support/do-view-check-wait/wait";
import { LaptopsTabletsPhones } from "../../support/page-objects/laptop-tablets-telephones/laptop-tablets-phones.page";
import { LaptopsTabletsPhonesLocators } from "../../support/page-objects/laptop-tablets-telephones/laptop-tablets-phones.locators";

const emagPage = new DashboardPage();

describe('Emag Navigation', () => {
    it('Emag Search', () => {
        cy.visit(DashboardLocators.Url)
        wait.elementToBeVisible(DashboardLocators.MegaMenuItem)
        check.haveLength(DashboardLocators.MegaMenuItem, 12)

        emagPage.navigateToMegamenu(NavItem.LaptopTableteTelefoane)
        check.haveLength(LaptopsTabletsPhonesLocators.NAV_ITEMS, 6)
    });
});