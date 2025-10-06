import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Blog', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/templates/blog/astro')
})
