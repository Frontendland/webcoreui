import path from 'path'

const config = {
    ssr: {
        noExternal: ['webcoreui']
    },
    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: [
                    path.resolve(process.cwd())
                ]
            }
        }
    }
}

export const webcore = () => {
    return {
        name: 'webcoreui',
        hooks: {
            'astro:config:setup': ({ updateConfig }) => {
                updateConfig({
                    vite: config
                })
            }
        }
    }
}

export const webcoreVite = () => {
    return {
        name: 'webcoreui',
        config() {
            return config
        }
    }
}
