import { vitePreprocess } from '@astrojs/svelte'

export default {
    preprocess: vitePreprocess(),
    onwarn: (warning, handler) => {
        // Suppress false positive warnings in terminal and eslint
        // Edit .vscode/settings.json to also suppress warnings in VSCode
        const ignoreWarnings = []

        const warningText = [
            warning.code,
            warning.message,
            warning.filename
        ].join(' ')

        if (new RegExp(ignoreWarnings.join('|'), 'gi').test(warningText)) {
            return
        }

        handler(warning)
    }
}
