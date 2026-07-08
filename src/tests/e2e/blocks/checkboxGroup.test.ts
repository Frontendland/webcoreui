import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('CheckboxGroup', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/blocks/checkbox-group')
})
