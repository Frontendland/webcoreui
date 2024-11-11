import node from '@astrojs/node'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import { defineConfig } from 'astro/config'

export default defineConfig({
    outDir: 'build',
    trailingSlash: 'never',
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
    integrations: [
        svelte(),
        react()
    ],
    build: {
        format: 'file'
    },
    vite: {
        ssr: {
            noExternal: ['webcoreui']
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        }
    }
})
