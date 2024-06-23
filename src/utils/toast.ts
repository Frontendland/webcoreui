import type { AlertProps } from '../components/Alert/alert'

type Toast = {
    element: string
    timeout?: number
    title?: AlertProps['title']
    content?: string
    theme?: AlertProps['theme']
}

let defaultTimeout = 5000

export let setDefaultTimeout = (time: number) => defaultTimeout = time

export const toast = (config: Toast | string) => {
    const element = typeof config === 'string'
        ? config
        : config.element

    const {
        timeout,
        title,
        content,
        theme
    } = (typeof config === 'string' ? {} : config) as Toast

    const htmlElement = document.querySelector(element)

    if (htmlElement) {
        htmlElement.classList.add('show')

        if (theme) {
            htmlElement.classList.add(theme)
        }

        if (title) {
            const titleElement = htmlElement.querySelector('.alert-title')

            titleElement ? titleElement.innerHTML = title : null
        }

        if (content) {
            const contentElement = htmlElement.querySelector('.alert-body')

            contentElement ? contentElement.innerHTML = content : null
        }

        setTimeout(() => {
            htmlElement.classList.remove('show')
        }, timeout || defaultTimeout)
    }
}

export const hideToast = (element: string) => {
    document.querySelector(element)?.classList.remove('show')
}
