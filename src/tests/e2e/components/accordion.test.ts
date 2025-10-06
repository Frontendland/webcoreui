import { Playwright } from '@e2e'
import { expect, type Locator, test } from '@playwright/test'

const selector = {
    text: 'We provide 30 days of support.',
    buttonText: 'Do you offer support?'
}

const verifyToggleAccordion = async (text: Locator, toggle: Locator) => {
    await expect(text).not.toBeVisible()
    await toggle.click()
    await expect(text).toBeVisible()
    await toggle.click()
    await expect(text).not.toBeVisible()
}

test('Accordion', async ({ page }) => {
    const pw = Playwright.create(page)

    const astroText = page.getByText(selector.text).first()
    const svelteText = page.getByText(selector.text).nth(1)
    const reactText = page.getByText(selector.text).nth(2)

    const astroToggle = pw.getButtonByName(selector.buttonText).first()
    const svelteToggle = pw.getButtonByName(selector.buttonText).nth(1)
    const reactToggle = pw.getButtonByName(selector.buttonText).nth(2)

    await pw.verifySnapshot('/components/accordion')

    await verifyToggleAccordion(astroText, astroToggle)
    await verifyToggleAccordion(svelteText, svelteToggle)
    await verifyToggleAccordion(reactText, reactToggle)
})
