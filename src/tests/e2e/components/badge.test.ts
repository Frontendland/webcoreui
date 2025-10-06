import { Playwright } from '@e2e'
import { expect, test } from '@playwright/test'

test('Badge', async ({ page }) => {
    const pw = Playwright.create(page)

    const chips = page.getByText('Click to remove')

    await pw.verifySnapshot('/components/badge')

    await expect(chips).toHaveCount(3)
    await chips.first().click()
    await expect(chips).toHaveCount(2)
})
