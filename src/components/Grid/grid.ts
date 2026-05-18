import type {
    Column,
    Gap,
    Responsive
} from '../../utils/getLayoutClasses'

export type GridProps = {
    element?: string
    gap?: Responsive<Gap>
    column?: Responsive<Column>
    className?: string
    [key: string]: any
}
