import React from 'react'
import { classNames } from 'webcoreui'
import { Button, Card } from 'webcoreui/react'

import type { TilesProps } from './tiles'
import styles from './tiles.module.scss'


const Tiles = ({
    columns,
    items
}: TilesProps) => {

    return (
        <div className={classNames([
            'grid sm',
            columns && `xs-${columns}`,
            (items.length > 1 && items.length !== 3 && !columns) && 'xs-2',
            (items.length === 3 && !columns) && 'xs-3'
        ])}>
            {items.map((item, index) => (
                <Button
                    theme="flat"
                    className={styles.btn}
                    href={item.href}
                    target={item.target}
                    key={index}
                >
                    <Card secondary={true} className={styles.card}>
                        {item.icon && (
                            <span
                                dangerouslySetInnerHTML={{ __html: item.icon }}
                                style={{ height: '20px' }}
                            />
                        )}
                        {item.label}
                    </Card>
                </Button>
            ))}
        </div>
    )
}

export default Tiles
