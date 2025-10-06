import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('OTPInput', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/components/otp-input')
})
