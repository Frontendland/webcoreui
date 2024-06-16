import fs from 'fs'
import buildImports from './buildImports.js'
import buildTypes from './buildTypes.js'

const folders = {
    'src/icons': 'dist/icons',
    'src/components': 'dist/components',
    'src/scss': 'dist/scss'
}

const files = {
    'README.md': 'dist/README.md',
    'LICENSE': 'dist/LICENSE',
    'package.json': 'dist/package.json'
}

console.log('🚀 Preparing package build')

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}

Object.keys(folders).forEach(key => {
    fs.cp(key, folders[key], { recursive: true }, error => {
        if (error) {
            console.error('🚨 error copying directory', error)
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

fs.writeFileSync('dist/astro.d.ts', buildTypes('astro'))
fs.writeFileSync('dist/svelte.d.ts', buildTypes('svelte'))
fs.writeFileSync('dist/react.d.ts', buildTypes('react'))

console.log('✅ Package built')
