import { Playwright } from '@e2e'
import { test } from '@playwright/test'

test('BlogCard', async ({ page }) => {
    const pw = Playwright.create(page)
    const element = page.locator('.grid').first()

    await pw.verifySnapshot('/blocks/blog-card', element)
})
