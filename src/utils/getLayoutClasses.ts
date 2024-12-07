import { classNames } from './classNames'

export type Gap = 'none'
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'default'
    | 'lg'
    | 'xl'
    | 'xl2'
    | 'xl3'
    | 'xl4'
    | 'xl5'
    | ''

export type VerticalAlignment = 'center'
    | 'start'
    | 'end'
    | 'baseline'
    | 'stretch'
    | ''

export type HorizontalAlignment = 'center'
    | 'start'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
    | ''

export type Direction = 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | ''

export type Wrap = 'wrap'
    | 'nowrap'
    | 'wrap-reverse'
    | ''

export type Responsive<T> = T | {
    xs?: T
    sm?: T
    md?: T
    lg?: T
}

export type Alignment = {
    horizontal?: HorizontalAlignment
    vertical?: VerticalAlignment
}

export type getLayoutClassesProps = {
    gap?: Responsive<Gap>
    alignment?: Responsive<Alignment>
    direction?: Responsive<Direction>
    wrap?: Responsive<Wrap>
}

export const getLayoutClasses = ({
    gap,
    alignment,
    direction,
    wrap
}: getLayoutClassesProps) => {
    const gaps = typeof gap === 'string'
        ? gap
        : Object.entries(gap || {}).map(([key, value]) => `${key}-${value}`)

    const directions = typeof direction === 'string'
        ? direction
        : Object.entries(direction || {}).map(([key, value]) => `${key}-${value}`)

    const wraps = typeof wrap === 'string'
        ? wrap
        : Object.entries(wrap || {}).map(([key, value]) => `${key}-${value}`)

    // Flatten alignments, eg.: { xs: { horizontal: 'center' } } to { xs-justify: 'center' }
    const flattenAlignments = (obj: Responsive<Alignment>, prefix = ''): Responsive<Alignment> => {
        return Object.entries(obj).reduce((acc, [key, value]) => {
            const newKey = (prefix ? `${prefix}-${key}` : key)
                .replace('horizontal', 'justify')
                .replace('vertical', 'items')

            if (typeof value === 'object') {
                return { ...acc, ...flattenAlignments(value, newKey) }
            }

            return { ...acc, [newKey]: value }
        }, {})
    }

    const alignments = [...new Set(
        Object.entries(flattenAlignments(alignment || {}))
            .map(([key, value]) => `${key}-${value}`) // Turn key-value pairs into strings
            .map((item, _, array) => { // Simplify center alignments
                const hasDuplicate = array.filter(entry => {
                    return entry.includes('justify-center') || entry.includes('items-center')
                }).length > 1

                return hasDuplicate ? item
                    .replace('justify-center', 'center')
                    .replace('items-center', 'center')
                    : item
            })
    )]

    return classNames([
        gaps,
        alignments,
        directions,
        wraps
    ])
}
