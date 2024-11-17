export const get = (selector: string, all?: boolean) => all
    ? document?.querySelectorAll(selector)
    : document?.querySelector(selector)

export const on = (
    selector: string | HTMLElement,
    event: string,
    callback: any,
    all?: boolean
) => {
    if (all) {
        const elements = document.querySelectorAll(selector as string)

        elements?.forEach(element => {
            element.addEventListener(event, callback)
        })

        return
    }

    if (typeof selector === 'string') {
        (get(selector) as HTMLElement)?.addEventListener(event, callback)

        return
    }

    selector?.addEventListener(event, callback)
}
