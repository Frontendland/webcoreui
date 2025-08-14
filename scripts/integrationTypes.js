export const integrationTypes = `
import type { AstroIntegration } from 'astro'
import { Plugin } from 'vite'

declare module 'webcoreui/integration' {
    export const webcore: () => AstroIntegration
    export const webcoreVite: () => Plugin
}
`
