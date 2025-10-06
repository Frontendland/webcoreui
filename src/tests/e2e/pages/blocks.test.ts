import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test.skip('Blocks', async ({ page }) => {
    const pw = Playwright.create(page)
    const element = page.locator('.container .flex').first()

    await pw.verifySnapshot('/blocks', element)
})
