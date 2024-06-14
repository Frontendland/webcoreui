import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'
import react from '@astrojs/react'

export default defineConfig({
    outDir: 'build',
    trailingSlash: 'never',
    integrations: [
        svelte(),
        react()
    ],
    build: {
        format: 'file'
    }
})
