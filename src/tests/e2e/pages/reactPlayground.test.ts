import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('React Playground', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/react')
})
