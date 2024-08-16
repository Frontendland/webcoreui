import type { ModalProps, ReactModalProps } from '../Modal/modal'

export type SheetProps = {
    position?: 'left'
        | 'top'
        | 'bottom'
        | null
} & ModalProps

export type ReactSheetProps = SheetProps & ReactModalProps
