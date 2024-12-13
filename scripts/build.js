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

const sassConfigEntry = 'dist/scss/config.scss'
const sassConfigs = [
    'dist/scss/config/color-palette.scss',
    'dist/scss/config/css-values.scss',
    'dist/scss/config/layout.scss',
    'dist/scss/config/mixins.scss',
    'dist/scss/config/typography.scss',
    'dist/scss/config/variables.scss'
]

console.log('🚀 Preparing package build')

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}

Object.keys(folders).forEach(key => {
    fs.cp(key, folders[key], { recursive: true }, error => {
        if (error) {
            console.error('🚨 error copying directory', error)
        }

        if (key.includes('scss') && !process.argv[2]) {
            const configFile = fs.readFileSync(sassConfigEntry, 'utf-8')

            fs.writeFileSync(
                sassConfigEntry,
                configFile.replace('webcore.config', '../../../webcore.config')
            )

            sassConfigs.forEach(config => {
                const file = fs.readFileSync(config, 'utf-8')

                fs.writeFileSync(
                    config,
                    file.replace('webcore.config', '../../../../webcore.config')
                )
            })
        }
    })
})

Object.keys(files).forEach(key => {
    fs.copyFile(key, files[key], error => {
        if (error) {
            console.error('🚨 error copying file', error)
        }

        // Replace package name, remove dependency, update tests path
        if (key.includes('package.json')) {
            const packageJson = fs.readFileSync(key, 'utf-8')
            const modifiedPackageJson = packageJson
                .replace('"webcore"', '"webcoreui"')
                .replace(/,\s+"webcoreui":\s"[0-9.]+"/g, '')
                .replace('vitest run &&', 'cd .. && vitest run &&')

            fs.writeFileSync(files[key], modifiedPackageJson)
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
