import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Authentication', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/templates/authentication/astro')
})
