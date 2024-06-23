import fs from 'fs'

export const buildImports = extension => {
    const components = fs.readdirSync('src/components')

    return components.map(component => {
        return `import ${component}Component from './components/${component}/${component}.${extension}'`
    }).join('\n')
        + `\n\n`
        + components.map(component => `export const ${component} = ${component}Component`).join('\n')
}

export const buildUtilImports = () => {
    const utils = fs.readdirSync('src/utils')

    return utils.map(util => `export * from './utils/${util}'`).join('\n')
}
