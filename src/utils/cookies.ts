export const setCookie = (name: string, value: string, days: number) => {
    let expires = ''

    if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = '; expires=' + date.toUTCString()
    }

    document.cookie = name + '=' + (value || '')  + expires + '; path=/'
}

export const getCookie = (name: string) => {
    const cookies = document.cookie.split(';')

    for (const cookie of cookies) {
        if (cookie.indexOf(name + '=') > -1) {
            return cookie.split('=')[1]
        }
    }

    return null
}

export const removeCookie = (name: string) => {
    document.cookie = name + '=; Max-Age=-1;'
}

