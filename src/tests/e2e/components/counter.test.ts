import { Playwright } from '@e2e'
import { expect, type Locator, type Page, test } from '@playwright/test'

const selectors = {
    input: '[data-id="w-counter"] input',
    decrement: '[data-id="w-counter-min"]',
    increment: '[data-id="w-counter-max"]'
}

const verifyCounter = async (input: Locator, decrement: Locator, increment: Locator) => {
    await expect(input).toHaveValue('0')

    // Test decrement
    await decrement.click()
    await expect(input).toHaveValue('-1')

    await decrement.click()
    await expect(input).toHaveValue('-2')

    // Test increment
    await increment.click()
    await expect(input).toHaveValue('-1')

    await increment.click()
    await expect(input).toHaveValue('0')
}

const verifyMinMax = async (input: Locator, decrement: Locator, increment: Locator) => {
    await input.fill('5')
    await input.evaluate((el) => el.setAttribute('min', '4'))
    await input.evaluate((el) => el.setAttribute('max', '6'))

    // Test min
    await decrement.click()
    await expect(input).toHaveValue('4')
    await decrement.click()
    await expect(input).toHaveValue('4')

    // Test max
    await increment.click()
    await expect(input).toHaveValue('5')
    await increment.click()
    await expect(input).toHaveValue('6')
    await increment.click()
    await expect(input).toHaveValue('6')
}

const verifyLongPress = async (input: Locator, decrement: Locator, increment: Locator, page: Page) => {
    await increment.hover()
    await page.mouse.down()
    await page.waitForTimeout(600)
    await page.mouse.up()

    const valueAfterLongPress = Number(await input.inputValue())
    expect(valueAfterLongPress).toBeGreaterThan(1)

    await decrement.hover()
    await page.mouse.down()
    await page.waitForTimeout(600)
    await page.mouse.up()

    const valueAfterLongPressDec = Number(await input.inputValue())
    expect(valueAfterLongPressDec).toBeLessThan(valueAfterLongPress)
}

test('Counter', async ({ page }) => {
    const pw = Playwright.create(page)

    const astroInput = page.locator(selectors.input).first()
    const astroDecrement = page.locator(selectors.decrement).first()
    const astroIncrement = page.locator(selectors.increment).first()

    await pw.verifySnapshot('/components/counter')

    await verifyCounter(astroInput, astroDecrement, astroIncrement)
    await verifyMinMax(astroInput, astroDecrement, astroIncrement)
    await verifyLongPress(astroInput, astroDecrement, astroIncrement, page)
})
