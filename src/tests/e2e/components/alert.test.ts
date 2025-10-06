import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Alert', async ({ page }) => {
    const pw = Playwright.create(page)
    const element = page.locator('.grid').nth(1)

    await pw.verifySnapshot('/components/alert', element)
})
