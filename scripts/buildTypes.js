import { getAdditionalTypeExports, getAdditionalTypeImports } from './additionalTypes.js'
import { integrationTypes } from './integrationTypes.js'
import { utilityTypes } from './utilityTypes.js'

import fs from 'fs'

const getTypeName = (component, framework) => {
    const componentsWithoutFrameworkSpecificTypes = [
        'Accordion',
        'Avatar',
        'BottomNavigation',
        'Breadcrumb',
        'Icon',
        'Image',
        'OTPInput',
        'Rating',
        'Skeleton',
        'Spinner',
        'Stepper',
        'Table',
        'Progress',
        'SpeedDial'
    ]

    return componentsWithoutFrameworkSpecificTypes.includes(component)
        ? `${component}Props`
        : `${framework}${component}Props`
}

const format = template => template.trim().replace(new RegExp('^[ \\t]{12}', 'gm'), '')

const buildTypes = type => {
    const components = fs.readdirSync('src/components')

    if (type === 'astro') {
        return format(`
            ${components.map(component => {
                return `import type { ${component}Props as W${component}Props } from './components/${component}/${component.toLowerCase()}'`
            }).join('\n')}

            ${getAdditionalTypeImports()}

            declare module 'webcoreui/${type}' {
                ${components.map(component => {
                    return `export function ${component}(_props: W${component}Props): any`
                }).join('\n\t')}

                ${components.map(component => {
                    return `export type ${component}Props = W${component}Props`
                }).join('\n\t')}

                ${getAdditionalTypeExports()}
            }
        `)
    }

    if (type === 'svelte') {
        return format(`
            import type { Component } from 'svelte'
            ${components.map(component => {
                return `import type { ${getTypeName(component, 'Svelte')} as W${getTypeName(component, 'Svelte')} } from './components/${component}/${component.toLowerCase()}'`
            }).join('\n')}

            ${getAdditionalTypeImports()}

            declare module 'webcoreui/${type}' {
                ${components.map(component => {
                    return `export const ${component}: Component<W${getTypeName(component, 'Svelte')}>`
                }).join('\n\t')}

                ${components.map(component => {
                    return `export type ${component}Props = W${getTypeName(component, 'Svelte')}`
                }).join('\n\t')}

                ${getAdditionalTypeExports()}
            }
        `)
    }

    if (type === 'react') {
        return format(`
            import { FC } from 'react'
            ${components.map(component => {
                return `import type { ${getTypeName(component, 'React')} as W${getTypeName(component, 'React')} } from './components/${component}/${component.toLowerCase()}'`
            }).join('\n')}

            ${getAdditionalTypeImports()}

            declare module 'webcoreui/${type}' {
                ${components.map(component => {
                    return `export const ${component}: FC<W${getTypeName(component, 'React')}>`
                }).join('\n\t')}

                ${components.map(component => {
                    return `export type ${component}Props = W${getTypeName(component, 'React')}`
                }).join('\n\t')}

                ${getAdditionalTypeExports()}
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
        return utilityTypes
    }

    if (type === 'integration') {
        return integrationTypes
    }
}

export default buildTypes
