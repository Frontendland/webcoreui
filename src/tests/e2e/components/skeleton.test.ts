import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Skeleton', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/components/skeleton')
})
