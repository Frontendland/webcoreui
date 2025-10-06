import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('User with Rating', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/blocks/user')
})
