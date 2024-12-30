import fs from 'fs'

const componentFlag = process.argv[2]

if (!componentFlag) {
    console.log('⚠️ Component name is missing. Use npm run create-component MyComponent.')
    process.exit()
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const component = capitalize(componentFlag)
const lowerCaseComponent = component.toLowerCase()
const rootPath = 'src/components'

if (fs.existsSync(`${rootPath}/${component}`)) {
    console.log(`⚠️ Component ${component} already exists. Please choose another name.`)
    process.exit()
}

const format = template => template.trim().replace(new RegExp('^[ \\t]{8}', 'gm'), '')

const templates = {
    astro: `
        ---
        import type { ${component}Props } from './${lowerCaseComponent}'

        import styles from './${lowerCaseComponent}.module.scss'

        interface Props extends ${component}Props {}

        const {
            className
        } = Astro.props

        const classes = [
            styles.${lowerCaseComponent},
            className
        ]
        ---
    `,
    svelte: `
        <script lang="ts">
            import type { ${component}Props } from './${lowerCaseComponent}'

            import { classNames } from '../../utils/classNames'

            import styles from './${lowerCaseComponent}.module.scss'

            const {
                className
            }: ${component}Props = $props()

            const classes = classNames([
                styles.${lowerCaseComponent},
                className
            ])
        </script>
    `,
    react: `
        import React from 'react'
        import type { ${component}Props } from './${lowerCaseComponent}'

        import { classNames } from '../../utils/classNames'

        import styles from './${lowerCaseComponent}.module.scss'
        
        const ${component} = ({
            className
        }: ${component}Props) => {
            const classes = classNames([
                styles.${lowerCaseComponent},
                className
            ])

            return <div>${component}</div>
        }
        
        export default ${component}
    `,
    types: `
        export type ${component}Props = {
            className?: string
        }
    `,
    styles: `
        @use '../../scss/config.scss' as *;

        .${lowerCaseComponent} {

        }
    `,
    page: `
        ---
        import ComponentWrapper from '@static/ComponentWrapper.astro'
        import Layout from '@static/Layout.astro'

        import Astro${component} from '@components/${component}/${component}.astro'
        import Svelte${component} from '@components/${component}/${component}.svelte'
        import React${component} from '@components/${component}/${component}.tsx'

        import { getSections } from '@helpers'

        const sections = getSections({
            title: '${lowerCaseComponent}s',
            components: [Astro${component}, Svelte${component}, React${component}]
        })
        ---

        <Layout>
            <h1>${component}</h1>
            <div class="grid md-2 lg-3">
                <ComponentWrapper type="Astro">
                    <Astro${component} />
                </ComponentWrapper>

                <ComponentWrapper type="Svelte">
                    <Svelte${component} />
                </ComponentWrapper>

                <ComponentWrapper type="React">
                    <React${component} />
                </ComponentWrapper>
            </div>

            {sections.map(section => (
                <h1>{section.title}</h1>
                <Fragment>
                    {section.subTitle && <h2 set:html={section.subTitle} />}
                </Fragment>
                <div class="grid md-2 lg-3">
                    <ComponentWrapper title="Default">
                        <section.component />
                    </ComponentWrapper>
                </div>
            ))}
        </Layout>
    `
}

fs.mkdirSync(`${rootPath}/${component}`)

fs.writeFileSync(`${rootPath}/${component}/${component}.astro`, format(templates.astro))
fs.writeFileSync(`${rootPath}/${component}/${component}.svelte`, format(templates.svelte))
fs.writeFileSync(`${rootPath}/${component}/${component}.tsx`, format(templates.react))
fs.writeFileSync(`${rootPath}/${component}/${lowerCaseComponent}.ts`, format(templates.types))
fs.writeFileSync(`${rootPath}/${component}/${lowerCaseComponent}.module.scss`, format(templates.styles))
fs.writeFileSync(`src/pages/components/${lowerCaseComponent}.astro`, format(templates.page))

console.log(`✅ Component ${component} created at ${rootPath}/${component}.`)
