import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Textarea', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/components/textarea')
})
