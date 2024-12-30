import type {
    ModalProps,
    ReactModalProps,
    SvelteModalProps
} from '../Modal/modal'

export type SheetProps = {
    position?: 'left'
        | 'top'
        | 'bottom'
} & ModalProps

export type SvelteSheetProps = SheetProps & SvelteModalProps
export type ReactSheetProps = SheetProps & ReactModalProps
