import { vitePreprocess } from '@astrojs/svelte'

export default {
	preprocess: vitePreprocess(),
	onwarn: (warning, handler) => {
		// Suppress false positive a11y warnings in terminal
		// Edit .vscode/settings.json to also suppress warnings in VSCode
		const ignoreWarnings = [
			'a11y-click-events-have-key-events',
            'a11y-no-static-element-interactions'
		]

		if (ignoreWarnings.includes(warning.code)) {
			return
		}

		handler(warning)
	}
}
