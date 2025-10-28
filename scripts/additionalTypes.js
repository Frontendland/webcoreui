const additionalTypes = {
    DataTable: [
        'DataTableEventType',
        'HeadingObject'
    ],
    List: ['ListEventType'],
    Pagination: ['PaginationEventType'],
    RangeSlider: ['RangeSliderEventType'],
    Select: ['SelectEventType']
}

export const getAdditionalTypeImports = () => {
    return Object.entries(additionalTypes).map(([key, values]) => {
        return `import type { ${values.map(value => `${value} as W${value}`).join(', ')} } from './components/${key}/${key.toLowerCase()}.ts'`
    }).join('\n')
}

export const getAdditionalTypeExports = () => {
    return Object
        .values(additionalTypes)
        .flat()
        .map(type => `export type ${type} = W${type}`).join('\n\t')
}
