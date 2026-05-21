import type { AspectRatioProps } from './aspectratio'

import { classNames } from '../../utils/classNames'

import styles from './aspect-ratio.module.scss'

export type Props = AspectRatioProps & {
    children: React.ReactNode
}

const AspectRatio = ({
    ratio,
    children,
    className
}: Props) => {
    const classes = classNames([
        styles.ratio,
        className
    ])

    return (
        <div
            className={classes}
            style={{ aspectRatio: ratio.replace(':', '/') }}
        >
            {children}
        </div>
    )
}

export default AspectRatio
