export const dispatch = (event: string, detail: any) => {
    document.dispatchEvent(new CustomEvent(event, {
        detail
    }))
}

export const listen = (event: string, callback: (e: any) => any) => {
    const fn = (e: any) => callback(e.detail)

    document.addEventListener(event, fn)

    return {
        remove() {
            document.removeEventListener(event, fn)
        }
    }
}
