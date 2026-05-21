import type { SheetProps } from './sheet'

import Modal, { type Props as ModalProps } from '../Modal/Modal.tsx'

import { classNames } from '../../utils/classNames'

import styles from './sheet.module.scss'

export type Props = SheetProps & ModalProps

const Sheet = ({
    position,
    className,
    children,
    ...rest
}: Props) => {
    const classes = classNames([
        styles.sheet,
        position && styles[position],
        className
    ])

    return (
        <Modal
            className={classes}
            {...rest}
        >
            {children}
        </Modal>

    )
}

export default Sheet
