import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Maintenance', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/blocks/maintenance')
})
