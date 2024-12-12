import type { ModalCallback } from '../../utils/modal'
import type { PopoverCallback, PopoverPosition } from '../../utils/popover'

import type { ListEventType, ListProps } from '../List/list'

export type SelectEventType = {
    select: string
} & ListEventType

export type SelectProps = {
    name: string
    value?: string
    placeholder?: string
    label?: string
    subText?: string
    disabled?: boolean
    updateValue?: boolean
    position?: PopoverPosition | 'modal'
} & ListProps

export type SvelteSelectProps = {
    onChange?: (event: SelectEventType) => void
    onClose?: (event: ModalCallback | PopoverCallback) => void
} & SelectProps

export type ReactSelectProps = {
    onChange?: (event: SelectEventType) => void
    onClose?: (event: ModalCallback | PopoverCallback) => void
} & SelectProps
