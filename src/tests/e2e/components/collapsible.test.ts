import { Playwright } from '@e2e'
import { expect, type Locator, test } from '@playwright/test'

const selector = {
    table: 'table',
    expandButtonText: 'Expand'
}

const verifyCollapsible = async (toggle: Locator, table: Locator) => {
    await toggle.click()
    await expect(table).toBeVisible()
}

test('Collapsible', async ({ page }) => {
    const pw = Playwright.create(page)

    const astroToggle = pw.getButtonByName(selector.expandButtonText).first()
    const svelteToggle = pw.getButtonByName(selector.expandButtonText).nth(1)
    const reactToggle = pw.getButtonByName(selector.expandButtonText).nth(2)

    const astroTable = page.locator(selector.table).first()
    const svelteTable = page.locator(selector.table).nth(1)
    const reactTable = page.locator(selector.table).nth(2)

    await pw.verifySnapshot('/components/collapsible')

    await verifyCollapsible(astroToggle, astroTable)
    await verifyCollapsible(svelteToggle, svelteTable)
    await verifyCollapsible(reactToggle, reactTable)
})

