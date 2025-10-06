import { expect, type Locator, type Page } from '@playwright/test'

export class Playwright {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async verifySnapshot(route: string, element?: Locator) {
        await this.page.goto(route)
        await expect(element || this.page).toHaveScreenshot({
            fullPage: !element,
            maxDiffPixelRatio: 0.05
        })
    }

    getButtonByName(name: string) {
        return this.page.getByRole('button', { name })
    }

    static create(page: Page): Page & Playwright {
        return new Proxy(new Playwright(page), {
            get(target, prop, receiver) {
                if (prop in target) {
                    return Reflect.get(target, prop, receiver)
                }
                return Reflect.get(page, prop, receiver)
            }
        }) as Page & Playwright
    }
}
