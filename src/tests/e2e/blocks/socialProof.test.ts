import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('SocialProof', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/blocks/social-proof')
})
