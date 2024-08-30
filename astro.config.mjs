import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import { defineConfig } from 'astro/config'

export default defineConfig({
    outDir: 'build',
    trailingSlash: 'never',
    output: 'server',
    integrations: [
        svelte(),
        react()
    ],
    build: {
        format: 'file'
    }
})
