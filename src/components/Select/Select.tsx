import React, { useEffect,useState } from 'react'
import type { ReactSelectProps } from './select'

import Input from '../Input/Input.tsx'
import List from '../List/List.tsx'
import Modal from '../Modal/Modal.tsx'
import Popover from '../Popover/Popover.tsx'

import { classNames } from '../../utils/classNames'
import { debounce } from '../../utils/debounce'
import { modal } from '../../utils/modal'
import { closePopover, popover, type PopoverPosition } from '../../utils/popover'

import ArrowDown from '../../icons/arrow-down.svg?raw'

import styles from './select.module.scss'

import type { ListEventType } from '../List/list'

const Select = ({
    name,
    value,
    placeholder,
    label,
    subText,
    disabled,
    updateValue = true,
    position = 'bottom',
    className,
    onChange,
    ...rest
}: ReactSelectProps) => {
    const [val, setValue] = useState(value)

    const classes = classNames([
        styles.select,
        className
    ])

    const popoverClasses = classNames([
        `w-options-${name}`,
        styles.popover
    ])

    const inputRestProps = Object.fromEntries(
        Object.entries(rest).filter(([key]) => key.includes('data'))
    )

    let popoverInstance: any

    const select = (event: ListEventType) => {
        closePopover(`.w-options-${name}`)

        if (updateValue) {
            setValue(event.name)
        }

        onChange?.({
            ...event,
            select: name
        })
    }

    useEffect(() => {
        let observer: ResizeObserver | undefined

        if (position === 'modal') {
            modal({
                trigger: `.w-select-${name}`,
                modal: `.w-options-${name}`,
                onOpen: ({ modal }) => {
                    const search = modal.querySelector('input')

                    if (search) {
                        search.focus()
                    }
                }
            })
        } else {
            setTimeout(() => {
                const resize = debounce(() => {
                    const selectElement = document.querySelector(`.w-select-${name}`) as HTMLInputElement

                    const { width } = selectElement.getBoundingClientRect()
                    const dialogElement = document.querySelector(`.w-options-${name}`) as HTMLDialogElement

                    dialogElement.style.width = `${width}px`
                })

                observer = new ResizeObserver(() => resize())
                observer.observe(document.body)

                popoverInstance = popover({
                    trigger: `.w-select-${name}`,
                    popover: `.w-options-${name}`,
                    position: position as PopoverPosition,
                    onOpen({ popover }) {
                        const search = popover.querySelector('input')

                        if (search) {
                            search.focus()
                        }
                    }
                })
            }, 0)
        }

        return () => {
            popoverInstance?.remove()
            observer?.unobserve(document.body)
        }
    }, [])

    return (
        <React.Fragment>
            <Input
                type="text"
                value={val}
                readOnly={true}
                disabled={disabled}
                placeholder={placeholder}
                label={label}
                subText={subText}
                className={`w-select-${name}`}
                labelClassName={classes}
                {...inputRestProps}
            >
                <span
                    dangerouslySetInnerHTML={{ __html: ArrowDown }}
                    style={{
                        right: 0,
                        pointerEvents: 'none'
                    }}
                />
            </Input>
            {position === 'modal'
                ? (
                    <Modal
                        className={popoverClasses}
                        showCloseIcon={false}
                    >
                        <List onSelect={select} {...rest} />
                    </Modal>
                ) : (
                    <Popover className={popoverClasses} isInteractive={true}>
                        <List onSelect={select} {...rest} />
                    </Popover>
                )
            }
        </React.Fragment>
    )
}

export default Select
