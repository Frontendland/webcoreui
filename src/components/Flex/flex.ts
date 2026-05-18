import type {
    Alignment,
    Direction,
    Gap,
    Responsive,
    Wrap
} from '../../utils/getLayoutClasses'

export type FlexProps = {
    element?: string
    gap?: Responsive<Gap>
    alignment?: Responsive<Alignment>
    direction?: Responsive<Direction>
    wrap?: Responsive<Wrap>
    className?: string
    [key: string]: any
}
