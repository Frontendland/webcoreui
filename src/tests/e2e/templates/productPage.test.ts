import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('ProductPage', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/templates/product-page/astro')
})
