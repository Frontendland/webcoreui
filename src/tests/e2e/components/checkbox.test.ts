import { Playwright } from '@e2e'
import { expect, type Locator, test } from '@playwright/test'

const verifyCheck = async (label: Locator) => {
    const checkbox = label.locator('input')

    await expect(checkbox).toBeChecked()
    await label.click()
    await expect(checkbox).not.toBeChecked()
}

test('Checkbox', async ({ page }) => {
    const pw = Playwright.create(page)

    const astroCheck = page.locator('label').first()
    const svelteCheck = page.locator('label').nth(1)
    const reactCheck = page.locator('label').nth(2)

    await pw.verifySnapshot('/components/checkbox')

    await verifyCheck(astroCheck)
    await verifyCheck(svelteCheck)
    await verifyCheck(reactCheck)
})
