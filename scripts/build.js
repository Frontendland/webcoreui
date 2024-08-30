import { buildIconImports,buildImports, buildUtilImports } from './buildImports.js'
import buildTypes from './buildTypes.js'

import fs from 'fs'

const folders = {
    'src/icons': 'dist/icons',
    'src/components': 'dist/components',
    'src/scss': 'dist/scss',
    'src/utils': 'dist/utils'
}

const files = {
    'README.md': 'dist/README.md',
    'LICENSE': 'dist/LICENSE',
    'package.json': 'dist/package.json'
}

const sassConfig = 'dist/scss/config.scss'

console.log('🚀 Preparing package build')

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}

Object.keys(folders).forEach(key => {
    fs.cp(key, folders[key], { recursive: true }, error => {
        if (error) {
            console.error('🚨 error copying directory', error)
        }

        if (key.includes('scss')) {
            const configFile = fs.readFileSync(sassConfig, 'utf-8')

            fs.writeFileSync(sassConfig, configFile.replace('../../webcore', '../webcore'))
        }
    })
})

Object.keys(files).forEach(key => {
    fs.copyFile(key, files[key], error => {
        if (error) {
            console.error('🚨 error copying file', error)
        }
    })
})

fs.writeFileSync('dist/astro.js', buildImports('astro'))
fs.writeFileSync('dist/svelte.js', buildImports('svelte'))
fs.writeFileSync('dist/react.js', buildImports('tsx'))

fs.writeFileSync('dist/index.js', buildUtilImports())
fs.writeFileSync('dist/icons.js', buildIconImports())

fs.writeFileSync('dist/astro.d.ts', buildTypes('astro'))
fs.writeFileSync('dist/svelte.d.ts', buildTypes('svelte'))
fs.writeFileSync('dist/react.d.ts', buildTypes('react'))
fs.writeFileSync('dist/icons.d.ts', buildTypes('icons'))
fs.writeFileSync('dist/index.d.ts', buildTypes('utils'))

console.log('✅ Package built')
