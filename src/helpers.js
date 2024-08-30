export const getSections = ({
    title,
    components,
    showSubTitle = false,
    props = {}
}) => {
    return [
        {
            title: `Astro ${title}`,
            component: components[0],
            ...(props && props)
        },
        ...(components[1] ? [{
            title: `Svelte ${title}`,
            component: components[1],
            ...(showSubTitle && {
                subTitle: 'For interactive examples, visit <a href="/svelte">Svelte Playground</a>'
            }),
            ...(props && props)
        }] : []),
        ...(components[2] ? [{
            title: `React ${title}`,
            component: components[2],
            ...(showSubTitle && {
                subTitle: 'For interactive examples, visit <a href="/react">React Playground</a>'
            }),
            ...(props && props)
        }] : [])
    ]
}
