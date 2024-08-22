export const debounce = (fn: any, waitFor = 100) => {
    let timeout: ReturnType<typeof setTimeout> | null

    const clear = () => {
        if (timeout !== null) {
            clearTimeout(timeout)
            timeout = null
        }
    }

    const debouncedFn = (...args: any[]) => {
        clear()
    
        timeout = setTimeout(() => {
            fn(...args)
        }, waitFor)
    }

    debouncedFn.cancel = () => {
        clear()
    }

    return debouncedFn
}
