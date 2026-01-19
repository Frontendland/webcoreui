import React from 'react'
import { classNames } from 'webcoreui'
import { Button, Card, ConditionalWrapper } from 'webcoreui/react'

import ButtonBlock from '@blocks/Button/Button.tsx'

import type { TilesProps } from './tiles'
import styles from './tiles.module.scss'


const Tiles = ({
    columns,
    items
}: TilesProps) => {

    if (!items?.length) {
        return <div /> // Return null in React - only needed for Astro
    }

    return (
        <div className={classNames([
            'grid sm',
            columns && `xs-${columns}`,
            (items.length > 1 && items.length !== 3 && !columns) && 'xs-2',
            (items.length === 3 && !columns) && 'xs-3'
        ])}>
            {items.map((item, index) => (
                <ConditionalWrapper
                    key={index}
                    condition={!!item.href}
                    wrapper={children => (
                        <Button
                            theme="flat"
                            className={styles.btn}
                            href={item.href}
                            target={item.target}
                        >
                            {children}
                        </Button>
                    )}
                >
                    <Card secondary={true} className={styles.card}>
                        {item.icon && (
                            <span
                                dangerouslySetInnerHTML={{ __html: item.icon }}
                                style={{ height: '20px' }}
                            />
                        )}

                        <ConditionalWrapper
                            condition={!!item.subText}
                            wrapper={children => (
                                <div className={classNames([styles.wrapper, 'flex column none'])}>
                                    {children}
                                </div>
                            )}
                        >
                            <ConditionalWrapper
                                condition={!!item.badge?.text}
                                wrapper={children => (
                                    <div className="flex justify-between">
                                        {children}
                                    </div>
                                )}
                            >
                                {item.label}
                                {item.badge && (
                                    <ButtonBlock badge={true} {...item.badge} />
                                )}
                            </ConditionalWrapper>

                            {item.subText && <span className="muted">{item.subText}</span>}
                        </ConditionalWrapper>
                    </Card>
                </ConditionalWrapper>
            ))}
        </div>
    )
}

export default Tiles
