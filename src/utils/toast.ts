import type { AlertProps } from '../components/Alert/alert'
import type { ToastProps } from '../components/Toast/toast'

type Toast = {
    element: string
    timeout?: number
    title?: AlertProps['title']
    content?: string
    theme?: AlertProps['theme']
    position?: ToastProps['position']
}

let defaultTimeout = 5000

export const setDefaultTimeout = (time: number) => defaultTimeout = time

export const toast = (config: Toast | string) => {
    const element = typeof config === 'string'
        ? config
        : config.element

    const {
        timeout,
        title,
        content,
        theme,
        position
    } = (typeof config === 'string' ? {} : config) as Toast

    const htmlElement = document.querySelector(element) as HTMLElement

    if (htmlElement) {
        if (theme) {
            htmlElement.dataset.theme = theme
        }
        
        if (position) {
            htmlElement.dataset.position = position
        }

        if (title) {
            const titleElement = htmlElement.querySelector('[data-id="title"]')

            titleElement ? titleElement.innerHTML = title : null
        }

        if (content) {
            const contentElement = htmlElement.querySelector('[data-id="body"]')

            contentElement ? contentElement.innerHTML = content : null
        }

        setTimeout(() => {
            htmlElement.dataset.show = 'true'
        }, 0)

        setTimeout(() => {
            htmlElement.dataset.show = ''
        }, timeout || defaultTimeout)
    }
}

export const hideToast = (element: string) => {
    const htmlElement = document.querySelector(element) as HTMLElement

    if (htmlElement) {
        htmlElement.dataset.show = ''
    }
}
