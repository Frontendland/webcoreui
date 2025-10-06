import { Playwright } from '@e2e'
import { expect, type Locator, test } from '@playwright/test'

const selector = {
    buttonText: 'copy'
}

const verifyCopy = async (button: Locator) => {
    await button.click()
    await expect(button.locator('+ span svg')).toBeVisible()
}

test('Copy', async ({ page }) => {
    const pw = Playwright.create(page)

    const astroButton = pw.getButtonByName(selector.buttonText).first()
    const svelteButton = pw.getButtonByName(selector.buttonText).nth(1)
    const reactButton = pw.getButtonByName(selector.buttonText).nth(2)

    await pw.verifySnapshot('/components/copy')

    await verifyCopy(astroButton)
    await verifyCopy(svelteButton)
    await verifyCopy(reactButton)
})
