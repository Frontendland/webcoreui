import { Playwright } from '@e2e'
import { expect, type Locator, test } from '@playwright/test'

const selectors = {
    buttonAriaLabel: 'page 2',
    pagination: '[data-text="Slide {0} of {1}"]',
    progress: '.w-carousel-progress div'
}

const verifySlide = async (button: Locator, text?: Locator, progress?: Locator) => {
    if (text && progress) {
        await expect(text).toHaveText('Slide 1 of 3')
        await expect(progress).toHaveAttribute('style', '--w-progress-width: 0%;')
    }

    await expect(button).not.toHaveAttribute('data-active')
    await button.click()
    await expect(button).toHaveAttribute('data-active')

    if (text && progress) {
        await expect(text).toHaveText('Slide 2 of 3')
        await expect(progress).toHaveAttribute('style', '--w-progress-width: 50%;')
    }
}

test('Carousel', async ({ page }) => {
    const pw = Playwright.create(page)

    const astroButton = pw.getButtonByName(selectors.buttonAriaLabel).first()
    const svelteButton = pw.getButtonByName(selectors.buttonAriaLabel).nth(1)
    const reactButton = pw.getButtonByName(selectors.buttonAriaLabel).nth(2)

    const astroText = page.locator(selectors.pagination).first()
    const astroProgress = page.locator(selectors.progress).first()

    await pw.verifySnapshot('/components/carousel')

    await verifySlide(astroButton, astroText, astroProgress)
    await verifySlide(svelteButton)
    await verifySlide(reactButton)
})
