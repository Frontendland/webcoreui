import { Playwright } from '@e2e'
import { expect, type Locator, type Page, test } from '@playwright/test'

const verifyFill = async (inputs: Locator) => {
    await inputs.nth(0).focus()
    await inputs.nth(0).fill('1')

    await expect(inputs.nth(1)).toBeFocused()
}

const verifyDelete = async (inputs: Locator) => {
    await inputs.nth(1).focus()
    await inputs.nth(1).press('Backspace')

    await expect(inputs.nth(0)).toBeFocused()
}

const verifyNavigation = async (inputs: Locator) => {
    await inputs.nth(0).focus()
    await inputs.nth(0).press('ArrowRight')
    await expect(inputs.nth(1)).toBeFocused()

    await inputs.nth(1).press('ArrowLeft')
    await expect(inputs.nth(0)).toBeFocused()
}

const verifyPaste = async (inputs: Locator, page: Page) => {
    await inputs.nth(0).focus()

    await page.evaluate(() => {
        const clipboardEvent = new ClipboardEvent('paste', {
            clipboardData: new DataTransfer()
        })
        clipboardEvent.clipboardData?.setData('text', '123456')
        document.activeElement?.dispatchEvent(clipboardEvent)
    })

    const values = await Promise.all(
        (await inputs.all()).map(input => input.inputValue())
    )

    expect(values).toEqual(['1', '2', '3', '4', '5', '6'])
}

test('OTPInput', async ({ page }) => {
    const pw = Playwright.create(page)

    await pw.verifySnapshot('/components/otp-input')

    const wrapper = page.locator('[data-length]').first()
    const inputs = wrapper.locator('[data-id="w-input-otp"]')

    await expect(inputs).toHaveCount(6)

    await verifyFill(inputs)
    await verifyDelete(inputs)
    await verifyNavigation(inputs)
    await verifyPaste(inputs, page)
})
