import React from 'react'
import type { TableProps } from './table'

import styles from './table.module.scss'
import { classNames } from '../../utils/classNames'

const Table = ({
    headings,
    footer,
    data,
    hover,
    striped,
    offsetStripe,
    compact,
    maxHeight,
    className
}: TableProps) => {
    const classes = classNames([
        styles.table,
        hover && styles.hover,
        striped && styles[`striped-${striped}s`],
        offsetStripe && styles.offset,
        compact && styles.compact,
        maxHeight && styles.scroll,
        className
    ])

    const styleVariables = {
        ...(maxHeight && { 'max-height': maxHeight })
    } as React.CSSProperties

    return (
        <div className={classes} style={styleVariables}>
            <table>
                {headings?.length && (
                    <thead>
                        <tr>
                            {headings.map((heading, index) => (
                                <th key={index}>{heading}</th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((column, columnIndex) => (
                                <td
                                    key={columnIndex}
                                    dangerouslySetInnerHTML={{ __html: column }}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
                {footer?.length && (
                    <tfoot>
                        <tr>
                            {footer.map((data, index) => (
                                <td key={index}>{data}</td>
                            ))}
                        </tr>
                    </tfoot>
                )}
            </table>
        </div>
    )
}

export default Table
