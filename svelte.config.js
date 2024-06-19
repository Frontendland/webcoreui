import { vitePreprocess } from '@astrojs/svelte'

export default {
	preprocess: vitePreprocess(),
	onwarn: (warning, handler) => {
		// Suppress false positive warnings in terminal
		// Edit .vscode/settings.json to also suppress warnings in VSCode
		const ignoreWarnings = [
			'a11y-click-events-have-key-events',
            'a11y-no-static-element-interactions',
			'a11y-no-noninteractive-element-interactions',
			'.accordion-title'
		]

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
