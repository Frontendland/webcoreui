export const getSections = ({
    title,
    components,
    showSubTitle = false
}) => {
    return [
        {
            title: `Astro ${title}`,
            component: components[0],
        },
        {
            title: `Svelte ${title}`,
            component: components[1],
            ...(showSubTitle && {
                subTitle: 'For interactive examples, visit <a href="/svelte">Svelte Playground</a>',
            })
        },
        {
            title: `React ${title}`,
            component: components[2],
            ...(showSubTitle && {
                subTitle: 'For interactive examples, visit <a href="/react">React Playground</a>',
            })
        }
    ]
}
