import type {
    Column,
    Gap,
    Responsive
} from '../../utils/getLayoutClasses'

export type GridProps<T extends object = object> = {
    element?: string
    gap?: Responsive<Gap>
    column?: Responsive<Column>
    className?: string
} & T
