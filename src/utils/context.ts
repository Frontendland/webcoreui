export const closeContext = (ctx: string | HTMLElement) => {
    const element = typeof ctx === 'string'
        ? document.querySelector(ctx) as HTMLElement
        : ctx

    const parent = element?.parentElement as HTMLElement

    if (!parent) {
        // eslint-disable-next-line no-console
        console.error('Could not found context for:', ctx)
        return
    }

    parent.dataset.show = 'false'

    setTimeout(() => {
        parent.style.top = ''
        parent.style.left = ''
    }, 200)
}
