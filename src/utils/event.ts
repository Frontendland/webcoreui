export const dispatch = (event: string, detail: unknown) => {
    document.dispatchEvent(new CustomEvent(event, {
        detail
    }))
}

export const listen = (event: string, callback: (e: any) => unknown) => {
    const fn = (e: any) => callback(e.detail)

    document.addEventListener(event, fn)

    return {
        remove() {
            document.removeEventListener(event, fn)
        }
    }
}
