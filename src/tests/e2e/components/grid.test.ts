import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Grid', async ({ page }) => {
    const pw = Playwright.create(page)
    const element = page.locator('.grid.md-2.lg-3').nth(1)

    await pw.verifySnapshot('/components/grid', element)
})
