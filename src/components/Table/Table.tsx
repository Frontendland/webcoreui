import React from 'react'
import type { TableProps } from './table'

import './table.scss'

const Table = ({
    headings,
    footer,
    data,
    hover,
    striped,
    offsetStripe,
    compact,
    className
}: TableProps) => {
    const classes = [
        'w-table',
        hover && 'hover',
        striped && `striped-${striped}s`,
        offsetStripe && 'offset',
        compact && 'compact',
        className
    ].filter(Boolean).join(' ')

    return (
        <div className={classes}>
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
