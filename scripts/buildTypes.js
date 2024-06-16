import fs from 'fs'

const buildTypes = type => {
    const components = fs.readdirSync('src/components')

    return `
declare module 'webcoreui/${type}' {
    ${components.map(component => {
        return `import type { ${component}Props } from './components/${component}/${component.toLowerCase()}'`
    }).join('\n\t')}

    ${components.map(component => {
        return `export function ${component}(_props: ${component}Props): any`
    }).join('\n\t')}
}
    `
}

export default buildTypes
