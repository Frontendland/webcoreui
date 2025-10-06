import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('IconList', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/blocks/icon-list')
})
