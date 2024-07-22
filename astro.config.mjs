import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'
import react from '@astrojs/react'

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
