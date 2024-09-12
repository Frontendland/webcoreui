import React from 'react'
import type { DataTableProps } from './datatable'

import { classNames } from '../../utils/classNames'

import styles from './datatable.module.scss'

const DataTable = ({
    className
}: DataTableProps) => {
    const classes = classNames([
        styles.datatable,
        className
    ])

    return <div className={classes}>DataTable</div>
}

export default DataTable
