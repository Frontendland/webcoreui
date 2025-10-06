import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('GridWithIcons', async ({ page }) => {
    const pw = Playwright.create(page)
    const element = page.locator('.grid')
        .first()
        .locator('section')
        .first()

    await pw.verifySnapshot('/blocks/grid-with-icons', element)
})
