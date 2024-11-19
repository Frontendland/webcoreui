import fs from 'fs'
import { pathToFileURL } from 'node:url'
import * as sassTrue from 'sass-true'
import { describe, it } from 'vitest'

describe('Sass', () => {
    const testFiles = fs.readdirSync('./src/tests/scss')

    testFiles.forEach(file =>
        sassTrue.runSass(
            { describe, it },
            `./src/tests/scss/${file}`,
            {
                importers: [{
                    findFileUrl(url) {
                        return url === 'webcore.config.scss'
                            ? pathToFileURL('webcore.config.scss')
                            : null
                    }
                }]
            }
        )
    )
})
