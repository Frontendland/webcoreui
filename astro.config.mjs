import { defineConfig } from 'astro/config'

import node from '@astrojs/node'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import { webcore } from 'webcoreui/integration'

export default defineConfig({
    outDir: 'build',
    trailingSlash: 'never',
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
    integrations: [
        webcore(),
        svelte(),
        react()
    ],
    build: {
        format: 'file'
    }
})
