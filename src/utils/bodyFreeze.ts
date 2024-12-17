export const bodyFreeze = (freeze = true) => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth

    if (freeze) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.paddingRight = ''
        document.body.style.overflow = ''
    }
}
