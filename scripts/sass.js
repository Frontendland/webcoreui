import fs from 'fs'
import { pathToFileURL } from 'node:url'
import * as sass from 'sass'

const file = process.argv[2]

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
const kebabCase = str => str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
)

if (!file) {
    console.log('⚠️ Component/Block name is missing. Use npm run compile <ComponentName>.')
    process.exit()
}

const componentPath = `src/components/${capitalize(file)}/${kebabCase(file)}.module.scss`
const blockPath = `src/blocks/${capitalize(file)}/${kebabCase(file)}.module.scss`

const componentExists = fs.existsSync(componentPath)
const blockExists = fs.existsSync(blockPath)

if (!componentExists && !blockExists) {
    console.log(`⚠️ ${kebabCase(file)}.module.scss cannot found. Please check your command.`)
    process.exit()
}

const result = sass.compile(componentExists ? componentPath : blockPath, {
    loadPaths: ['.'],
    importers: [{
        findFileUrl(url) {
            return url === 'webcoreui/config'
                ? new URL(pathToFileURL('src/scss/config.scss'))
                : null
        }
    }]
})

console.log(result.css)
