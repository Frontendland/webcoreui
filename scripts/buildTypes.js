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
                'Radio',
                'Switch',
                'Slider'
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
}

export default buildTypes
