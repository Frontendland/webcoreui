import React, { useState } from 'react'
import { classNames } from 'webcoreui'

import Button from '@blocks/Button/Button.tsx'

import type { ExpandableTableProps } from './expandableTable'
import styles from './expandable-table.module.scss'

const ExpandableTable = ({
    headings,
    data,
    hover,
    striped,
    offsetStripe,
    compact,
    maxHeight,
    className,
    numberOfVisibleRows = 5,
    expandButtonLabel = 'Expand',
    collapseButtonLabel = 'Collapse',
    expandButton
}: ExpandableTableProps) => {
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
        ...(maxHeight && { maxHeight })
    } as React.CSSProperties

    const [expanded, setExpanded] = useState(false)

    const toggle = () => setExpanded(!expanded)

    if (!data.length) {
        return
    }

    return (
        <React.Fragment>
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
                            <tr
                                key={rowIndex}
                                data-hidden={numberOfVisibleRows < rowIndex + 1 && !expanded ? 'true' : undefined}
                            >
                                {row.map((column, columnIndex) => (
                                    <td
                                        key={columnIndex}
                                        dangerouslySetInnerHTML={{ __html: column }}
                                    />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {data.length > numberOfVisibleRows && (
                <Button
                    text={expanded ? collapseButtonLabel : expandButtonLabel}
                    onClick={toggle}
                    {...expandButton}
                />
            )}
        </React.Fragment>
    )
}

export default ExpandableTable
