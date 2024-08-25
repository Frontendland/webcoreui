import fs from 'fs'

const format = template => template.trim().replace(new RegExp('^[ \\t]{12}', 'gm'), '')

const buildTypes = type => {
    const components = fs.readdirSync('src/components')

    if (type === 'astro') {
        return format(`
            ${components.map(component => {
                return `import type { ${component}Props } from './components/${component}/${component.toLowerCase()}'`
            }).join('\n')}
    
            declare module 'webcoreui/${type}' {
                ${components.map(component => {
                    return `export function ${component}(_props: ${component}Props): any`
                }).join('\n\t')}
            }
        `)
    }

    if (type === 'svelte') {
        const getTypeName = component => {
            const componentsWithSvelteSpecificTypes = [
                'Badge',
                'Button',
                'Checkbox',
                'Input',
                'List',
                'Radio',
                'Switch',
                'Slider',
                'Textarea'
            ]
    
            return componentsWithSvelteSpecificTypes.includes(component)
                ? `Svelte${component}Props`
                : `${component}Props`
        }

        return format(`
            ${components.map(component => {
                return `import type { ${getTypeName(component)} } from './components/${component}/${component.toLowerCase()}'`
            }).join('\n')}
    
            declare module 'webcoreui/${type}' {
                ${components.map(component => {
                    return `export function ${component}(_props: ${getTypeName(component)}): any`
                }).join('\n\t')}
            }
        `)
    }

    if (type === 'react') {
        const getTypeName = component => {
            const componentsWithoutReactSpecificTypes = [
                'Accordion',
                'Avatar',
                'Icon',
                'Rating',
                'Spinner',
                'Table',
                'Progress'
            ]
    
            return componentsWithoutReactSpecificTypes.includes(component)
                ? `${component}Props`
                : `React${component}Props`
        }

        return format(`
            import { FC } from 'react'
            ${components.map(component => {
                return `import type { ${getTypeName(component)} } from './components/${component}/${component.toLowerCase()}'`
            }).join('\n')}

            declare module 'webcoreui/${type}' {
                ${components.map(component => {
                    return `export const ${component}: FC<${getTypeName(component)}>`
                }).join('\n\t')}
            }
        `)
    }

    if (type === 'icons') {
        const icons = fs.readdirSync('src/icons')
        const camelize = string => string.replace(/-./g, x => x[1].toUpperCase()).split('.')[0]

        return format(`
            declare module 'webcoreui/${type}' {
                ${icons.map(icon => {
                    return `export const ${camelize(icon)}: string`
                }).join('\n\t')}
            }
        `)
    }

    if (type === 'utils') {
        return format(`
            type PopoverPosition = 'top'
                | 'top-start'
                | 'top-end'
                | 'left'
                | 'left-start'
                | 'left-end'
                | 'right'
                | 'right-start'
                | 'right-end'
                | 'bottom'
                | 'bottom-start'
                | 'bottom-end'

            type Popover = {
                trigger: string
                popover: string
                position?: PopoverPosition
                offset?: number
                closeOnBlur?: boolean
            }

            type Toast = {
                element: string
                timeout?: number
                title?: string
                content?: string
                theme?: 'info' | 'success' | 'warning' | 'alert' | null
                position?: 'bottom-left'
                    | 'top-left'
                    | 'top-right'
                    | 'bottom-full'
                    | 'top-full'
            }

            declare module 'webcoreui' {
                export const classNames = (classes: any[]) => string
                
                export const setCookie = (name: string, value: string, days: number) => {}
                export const getCookie = (name: string) => string | null
                export const removeCookie = (name: string) => {}

                export const debounce = (fn: any, waitFor: number) => any

                export const dispatch = (event: string, detail: any) => {}
                export const listen = (event: string, callback: (e: any) => any) => {
                    remove()
                }

                export const clamp = (num: number, min: number, max: number) => number
                export const lerp = (start: number, end: number, value: number) => number
                export const invlerp = (start: number, end: number, value: number) => number
                export const interpolate = (
                    value: number,
                    input: [start: number, end: number],
                    output: [start: number, end: number],
                ) => number

                export const modal = (selector: string) => {}
                export const closeModal = (selector: string) => {}

                export const popover = (config: Popover) => {
                    remove()
                }
                export const closePopover = (selector: string) => {}

                export const setDefaultTimeout = (time: number) => number
                export const toast = (config: Toast | string) => {}
                export const hideToast = (element: string) => {}
            }
        `)
    }
}

export default buildTypes
