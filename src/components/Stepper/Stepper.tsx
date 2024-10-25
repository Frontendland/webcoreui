import React from 'react'
import type { StepperProps } from './stepper'

import { classNames } from '../../utils/classNames'

import styles from './stepper.module.scss'

const Stepper = ({
    className
}: StepperProps) => {
    const classes = classNames([
        styles.stepper,
        className
    ])

    return <div>Stepper</div>
}

export default Stepper