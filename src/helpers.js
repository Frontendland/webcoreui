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
        {
            title: `Svelte ${title}`,
            component: components[1],
            ...(showSubTitle && {
                subTitle: 'For interactive examples, visit <a href="/svelte">Svelte Playground</a>',
            }),
            ...(props && props)
        },
        {
            title: `React ${title}`,
            component: components[2],
            ...(showSubTitle && {
                subTitle: 'For interactive examples, visit <a href="/react">React Playground</a>',
            }),
            ...(props && props)
        }
    ]
}
