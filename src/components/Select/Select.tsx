import React, { useState, useEffect } from 'react'
import type { ReactSelectProps } from './select'

import Input from '../Input/Input.tsx'
import Popover from '../Popover/Popover.tsx'
import List from '../List/List.tsx'
import Modal from '../Modal/Modal.tsx'

import ArrowDown from '../../icons/arrow-down.svg?raw'
import styles from './select.module.scss'
import { classNames } from '../../utils/classNames'

import type { PopoverPosition } from '../../utils/popover'
import { popover, closePopover } from '../../utils/popover'
import { modal } from '../../utils/modal'

const Select = ({
    name,
    value,
    placeholder,
    label,
    subText,
    disabled,
    className,
    position = 'bottom',
    onChange,
    ...rest
}: ReactSelectProps) => {
    const [val, setValue] = useState(value)
    const [widthSet, setWidthSet] = useState(false)

    const classes = classNames([
        `w-select-${name}`,
        styles.select,
        className
    ])

    const popoverClasses = classNames([
        `w-options-${name}`,
        styles.popover
    ])

    let popoverInstance: any

    const open = () => {
        if (position === 'modal') {
            modal(`.w-options-${name}`)
        }
    }

    const select = (payload: any) => {
        closePopover(`.w-options-${name}`)

        setValue(payload.name)

        onChange?.({
            select: name,
            ...payload
        })
    }

    useEffect(() => {
        if (position !== 'modal') {
            setTimeout(() => {
                if (!widthSet) {
                    const selectElement = document.querySelector(`.w-select-${name}`) as HTMLInputElement
        
                    const { width } = selectElement.getBoundingClientRect()
                    const dialogElement = document.querySelector(`.w-options-${name}`) as HTMLDialogElement
            
                    dialogElement.style.width = `${width}px`
    
                    setWidthSet(true)
                }

                popoverInstance = popover({
                    trigger: `.w-select-${name}`,
                    popover: `.w-options-${name}`,
                    position: position as PopoverPosition
                })
            }, 0)
        }

        return () => {
            popoverInstance?.remove()
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
                labelClassName={classes}
                onClick={open}
            >
                <span
                    dangerouslySetInnerHTML={{ __html: ArrowDown }}
                    style={{
                        height: '18px',
                        position: 'absolute',
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
