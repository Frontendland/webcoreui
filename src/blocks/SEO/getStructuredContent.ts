export const getStructuredContent = (content: any) => `
    <script type="application/ld+json"${import.meta.env.DEV ? `data-id="${content['@type']}Schema"` : ''}>
        ${JSON.stringify(content, null, import.meta.env.DEV ? 4 : 0)}
    </script>
`
