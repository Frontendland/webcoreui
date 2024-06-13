import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'

export default defineConfig({
    outDir: 'build',
    trailingSlash: 'never',
    integrations: [
        svelte()
    ],
    build: {
        format: 'file'
    }
})
