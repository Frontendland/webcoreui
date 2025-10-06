import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Masonry', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/components/masonry')
})
