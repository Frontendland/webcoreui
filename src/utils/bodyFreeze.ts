export const bodyFreeze = (freeze = true) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    if (freeze) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
        document.body.style.overflow = 'hidden'
    } else {
        setTimeout(() => {
            document.body.style.paddingRight = ''
            document.body.style.overflow = ''
        }, 300)
    }
}
