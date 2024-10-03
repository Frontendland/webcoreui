export const getSections = ({
    title,
    components,
    showSubTitle = false,
    props = {}
}) => {
    return [
        {
            title: `Astro ${title}`,
            type: 'astro',
            component: components[0],
            ...(props && props)
        },
        ...(components[1] ? [{
            title: `Svelte ${title}`,
            type: 'svelte',
            component: components[1],
            ...(showSubTitle && {
                subTitle: 'For interactive examples, visit <a href="/svelte">Svelte Playground</a>'
            }),
            ...(props && props)
        }] : []),
        ...(components[2] ? [{
            title: `React ${title}`,
            type: 'react',
            component: components[2],
            ...(showSubTitle && {
                subTitle: 'For interactive examples, visit <a href="/react">React Playground</a>'
            }),
            ...(props && props)
        }] : [])
    ]
}

export const on = (element, callback) => {
    // eslint-disable-next-line no-undef
    document
        .querySelector(element)
        ?.addEventListener('click', callback)
}
