import type {
    Direction,
    Gap,
    HorizontalAlignment,
    Responsive,
    VerticalAlignment,
    Wrap
} from '../../utils/getLayoutClasses'

type Alignment = {
    horizontal?: HorizontalAlignment
    vertical?: VerticalAlignment
}

export type FlexProps = {
    element?: string
    gap?: Responsive<Gap>
    alignment?: Responsive<Alignment>
    direction?: Responsive<Direction>
    wrap?: Responsive<Wrap>
    className?: string
}

export type ReactFlexProps = {
    Element?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<FlexProps, 'element'>
