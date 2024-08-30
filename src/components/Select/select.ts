import type { PopoverPosition } from '../../utils/popover'

import type { ListEventType, ListProps } from '../List/list'

export type SelectProps = {
    name: string
    value?: string
    placeholder?: string
    label?: string
    subText?: string
    disabled?: boolean
    position?: PopoverPosition | 'modal'
} & ListProps

export type SvelteSelectProps = {
    onChange?: (event: ListEventType & { select: string }) => void
} & SelectProps

export type ReactSelectProps = {
    onChange?: (event: ListEventType & { select: string }) => void
} & SelectProps
