import React, { useState } from 'react'
import type { ReactListProps } from './list'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'
import Input from '../Input/Input.tsx'

import searchIcon from '../../icons/search.svg?raw'
import styles from './list.module.scss'
import { classNames } from '../../utils/classNames'

const List = ({
    showSearchBar,
    showSearchBarIcon,
    searchBarPlaceholder,
    noResultsLabel = 'No results.',
    maxHeight,
    id,
    className,
    wrapperClassName,
    itemGroups,
    onSelect
}: ReactListProps) => {
    const [searchValue, setSearchValue] = useState('')
    const [numberOfResults, setNumberOfResults] = useState(1)

    const classes = classNames([
        styles.list,
        !showSearchBar && styles.container,
        className
    ])

    const wrapperClasses = classNames([
        styles.container,
        wrapperClassName
    ])

    const style = maxHeight
        ? { maxHeight } as React.CSSProperties
        : undefined

    const search = (event: KeyboardEvent) => {
        const value = (event.target as HTMLInputElement).value

        setSearchValue(value)
        setNumberOfResults(
            itemGroups
                .map(group => group.items)
                .flat()
                .filter(item => {
                    return item.value?.toLowerCase().includes(value)
                        || item.subText?.toLowerCase().includes(value)
                        || item.name.toLowerCase().includes(value)
                }).length
        )

        console.log(numberOfResults)
    }

    const select = (event: any) => {
        const li = event.target as HTMLLIElement

        itemGroups = itemGroups.map(group => {
            group.items = group.items.map(item => {
                item.selected = li.dataset.name === item.name

                return item
            })

            return group
        })

        onSelect?.({
            ...li.dataset,
            list: li.parentElement
        })
    }

    const selectByKey = (event: any) => {
        if (event.key === 'Enter') {
            select(event)
        }
    }

    return (
        <ConditionalWrapper condition={!!showSearchBar} wrapper={children => (
            <div className={wrapperClasses}>
                <Input
                    type="search"
                    placeholder={searchBarPlaceholder}
                    onInput={search}
                >
                    {showSearchBarIcon && (
                        <span
                            dangerouslySetInnerHTML={{ __html: searchIcon }}
                            style={{ height: '18px', position: 'absolute' }}
                        />    
                    )}
                </Input>
                {children}
            </div>
        )}>
            <ul className={classes} id={id} data-id="w-list" style={style}>
                {itemGroups.map((group: ReactListProps['itemGroups'][0], index) => (
                    <React.Fragment key={index}>
                        {group.title && (
                            <li className={styles.title}
                                data-hidden={searchValue ? true : null}
                            >
                                {group.title}
                            </li>
                        )}
                        {group.items.map((item, index) => (
                            <li
                                key={index}
                                tabIndex={item.href || item.disabled ? undefined : 0}
                                data-value={item.value}
                                data-name={item.name}
                                data-disabled={item.disabled}
                                data-selected={item.selected ? true : undefined}
                                data-hidden={(
                                    !item.value?.toLowerCase().includes(searchValue)
                                    && !item.subText?.toLowerCase().includes(searchValue)
                                    && !item.name.toLowerCase().includes(searchValue)
                                ) ? true : null}
                                onClick={item.disabled ? undefined : select}
                                onKeyUp={item.disabled ? undefined : selectByKey}
                            >
                                <ConditionalWrapper condition={!!item.href} wrapper={children => (
                                    <a
                                        href={item.href}
                                        target={item.target}
                                    >
                                        {children}
                                    </a>
                                )}>

                                    <ConditionalWrapper condition={!!(item.icon && item.subText)} wrapper={children => (
                                        <div>{children}</div>
                                    )}>
                                        {item.icon && <span dangerouslySetInnerHTML={{ __html: item.icon }} />}
                                        {item.name}
                                    </ConditionalWrapper>
                                    {item.subText && <span>{item.subText}</span>}
                                </ConditionalWrapper>
                            </li>
                        ))}
                    </React.Fragment>
                ))}

                {showSearchBar && !numberOfResults && (
                    <li data-id="w-no-results">{noResultsLabel}</li>
                )}
            </ul>
        </ConditionalWrapper>
    )
}

export default List
