export const get = (selector: string, all?: boolean) => all
    ? document?.querySelectorAll(selector)
    : document?.querySelector(selector)

export const on = (
    selector: string | HTMLElement | Document,
    event: string,
    callback: any,
    all?: boolean
) => {
    if (all && typeof selector === 'string') {
        const elements = document.querySelectorAll(selector)

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

export const off = (
    selector: string | HTMLElement | Document,
    event: string,
    fn: any,
    all?: boolean
) => {
    if (all && typeof selector === 'string') {
        const elements = document.querySelectorAll(selector)

        elements?.forEach(element => {
            element.removeEventListener(event, fn)
        })

        return
    }

    if (typeof selector === 'string') {
        (get(selector) as HTMLElement)?.removeEventListener(event, fn)

        return
    }

    selector?.removeEventListener(event, fn)
}
