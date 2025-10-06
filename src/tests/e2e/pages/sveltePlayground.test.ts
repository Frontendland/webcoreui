import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('Svelte Playground', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/svelte')
})
