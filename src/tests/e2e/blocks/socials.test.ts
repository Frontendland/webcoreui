import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Socials', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/blocks/socials')
})
