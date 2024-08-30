import type { AlertProps } from '../components/Alert/alert'
import type { ToastProps } from '../components/Toast/toast'

type Toast = {
    element: string
    timeout?: number
    title?: AlertProps['title']
    content?: string
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
        position
    } = (typeof config === 'string' ? {} : config) as Toast

    const htmlElement = document.querySelector(element) as HTMLElement

    if (htmlElement) {
        if (position) {
            htmlElement.dataset.position = position
        }

        if (title) {
            const titleElement = htmlElement.querySelector('[data-id="title"]')

            if (titleElement) {
                titleElement.innerHTML = title
            }
        }

        if (content) {
            const contentElement = htmlElement.querySelector('[data-id="body"]')

            if (contentElement) {
                contentElement.innerHTML = content
            }
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
