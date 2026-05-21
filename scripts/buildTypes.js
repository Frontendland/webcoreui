import { getAdditionalTypeExports, getAdditionalTypeImports } from './additionalTypes.js'
import { integrationTypes } from './integrationTypes.js'
import { utilityTypes } from './utilityTypes.js'

import fs from 'fs'

const format = template => template.trim().replace(new RegExp('^[ \\t]{12}', 'gm'), '')

const buildTypes = type => {
    const components = fs.readdirSync('src/components')

    if (type === 'astro') {
        return format(`
            ${components.map(component => {
                return `import type { Props as W${component}Props } from './components/${component}/${component}.astro'`
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
                return `import type { Props as W${component}Props } from './components/${component}/${component}.svelte'`
            }).join('\n')}

            ${getAdditionalTypeImports()}

            declare module 'webcoreui/${type}' {
                ${components.map(component => {
                    return `export const ${component}: Component<W${component}Props>`
                }).join('\n\t')}

                ${components.map(component => {
                    return `export type ${component}Props = W${component}Props`
                }).join('\n\t')}

                ${getAdditionalTypeExports()}
            }
        `)
    }

    if (type === 'react') {
        return format(`
            import { FC } from 'react'

            ${components.map(component => {
                return `import type { Props as W${component}Props } from './components/${component}/${component}.tsx'`
            }).join('\n')}

            ${getAdditionalTypeImports()}

            declare module 'webcoreui/${type}' {
                ${components.map(component => {
                    return `export const ${component}: FC<W${component}Props>`
                }).join('\n\t')}

                ${components.map(component => {
                    return `export type ${component}Props = W${component}Props`
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
                ${icons.map(icon => `export const ${camelize(icon)}: string`).join('\n\t')}
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
