import fs from 'fs'

const folders = {
    'public': 'dist/public',
    'src/components': 'dist/components',
    'src/scss': 'dist/scss'
}

const files = {
    'src/astro.d.ts': 'dist/astro.d.ts',
    'src/astro.js': 'dist/astro.js'
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

console.log('✅ Package built')
