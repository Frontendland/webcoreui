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

export const buildIconImports = (raw = false) => {
    const icons = fs.readdirSync('src/icons')
    const camelize = string => string.replace(/-./g, x => x[1].toUpperCase()).split('.')[0]
    const capitalize = str => str?.replace(/\b\w/g, substr => substr.toUpperCase())

    return icons.map(icon => {
        const exportName = raw ? camelize(icon) : capitalize(camelize(icon))

        return `export { default as ${exportName} } from './icons/${icon}${raw ? '?raw' : ''}'`
    }).join('\n')
}
