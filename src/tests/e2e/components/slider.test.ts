import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Slider', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/components/slider')
})
