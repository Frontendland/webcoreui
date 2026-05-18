import { getAdditionalTypeExports, getAdditionalTypeImports } from './additionalTypes.js'
import { integrationTypes } from './integrationTypes.js'
import { utilityTypes } from './utilityTypes.js'

import fs from 'fs'

const componentsWithGenericTypes = [
    'Image',
    'Modal'
]

const componentsWithoutFrameworkSpecificTypes = [
    'Accordion',
    'Avatar',
    'BottomNavigation',
    'Breadcrumb',
    'Icon',
    'Image',
    'ImageLoader',
    'OTPInput',
    'Rating',
    'Skeleton',
    'Spinner',
    'Stepper',
    'Table',
    'Progress',
    'SpeedDial'
]

const getTypeName = (component, framework) => {
    return componentsWithoutFrameworkSpecificTypes.includes(component) && !componentsWithGenericTypes.includes(component)
        ? `${component}Props`
        : `${framework}${component}Props`
}

const getImportFile = (component, framework) => {
    const typeName = getTypeName(component, framework)
    const isFrameworkSpecificType = typeName.includes(framework)
    const isGeneric = componentsWithGenericTypes.includes(component)

    const extension = {
        Svelte: '.svelte',
        React: '.tsx'
    }

    const importFile = (isFrameworkSpecificType || isGeneric)
        ? `${component}${extension[framework]}`
        : component.toLowerCase()

    return importFile
}

const format = template => template.trim().replace(new RegExp('^[ \\t]{12}', 'gm'), '')

const buildTypes = type => {
    const components = fs.readdirSync('src/components')

    if (type === 'astro') {
        return format(`
            ${components.map(component => {
                const isGeneric = componentsWithGenericTypes.includes(component)
                const typeImport = isGeneric
                    ? `Props as W${component}Props`
                    : `${component}Props as W${component}Props`

                const importFile = isGeneric
                    ? `${component}.astro`
                    : component.toLowerCase()

                return `import type { ${typeImport} } from './components/${component}/${importFile}'`
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
                const typeName = getTypeName(component, 'Svelte')
                const importFile = getImportFile(component, 'Svelte')

                return `import type { ${typeName} as W${typeName} } from './components/${component}/${importFile}'`
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
                const typeName = getTypeName(component, 'React')
                const importFile = getImportFile(component, 'React')

                return `import type { ${typeName} as W${typeName} } from './components/${component}/${importFile}'`
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
