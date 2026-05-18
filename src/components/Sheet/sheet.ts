import type { ModalProps } from '../Modal/modal'

export type SheetProps<T extends object = object> = {
    position?: 'left'
        | 'top'
        | 'bottom'
} & ModalProps<T>
