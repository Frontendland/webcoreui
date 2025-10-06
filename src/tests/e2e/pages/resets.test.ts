import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('CSS - Resets', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/css/resets')
})
