import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('SettingCard', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/blocks/setting-card')
})
