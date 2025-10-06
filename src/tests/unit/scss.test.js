import fs from 'fs'
import { pathToFileURL } from 'node:url'
import * as sassTrue from 'sass-true'
import { describe, it } from 'vitest'

describe('Sass', () => {
    const testFiles = fs.readdirSync('./src/tests/unit/scss')

    testFiles.forEach(file =>
        sassTrue.runSass(
            { describe, it },
            `./src/tests/unit/scss/${file}`,
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
