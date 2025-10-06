import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('SpeedDial', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/components/speed-dial')
})
