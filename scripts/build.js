import fs from 'fs'

const destination = 'dist'
const folders = {
    'public': 'public',
    'src/components': 'components',
    'src/scss': 'scss'
}

console.log('🚀 Preparing package build')

folders.forEach(folder => {
    fs.cp(folder, destination, { recursive: true }, error => {
        console.error('🚨 error copying assets', error)
    })
})

// generate astro.d.ts and astro.js files
// copy components, public, and scss folder
// copy package.json
// minify files
// put everything into dist folder
