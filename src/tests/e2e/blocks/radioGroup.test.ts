import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('RadioGroup', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/blocks/radio-group')
})
