<script lang="ts">
    import { onMount } from 'svelte'
    import type { SvelteSelectProps } from './select'

    import Input from '../Input/Input.svelte'
    import List from '../List/List.svelte'
    import Modal from '../Modal/Modal.svelte'
    import Popover from '../Popover/Popover.svelte'

    import { classNames } from '../../utils/classNames'
    import { modal } from '../../utils/modal'
    import { closePopover, popover, type PopoverPosition } from '../../utils/popover'

    import ArrowDown from '../../icons/arrow-down.svg?raw'

    import styles from './select.module.scss'

    export let name: SvelteSelectProps['name'] = ''
    export let value: SvelteSelectProps['value'] = ''
    export let placeholder: SvelteSelectProps['placeholder'] = ''
    export let label: SvelteSelectProps['label'] = ''
    export let subText: SvelteSelectProps['subText'] = ''
    export let disabled: SvelteSelectProps['disabled'] = false
    export let className: SvelteSelectProps['className'] = ''
    export let position: SvelteSelectProps['position'] = 'bottom'
    export let onChange: SvelteSelectProps['onChange'] = () => {}

    let popoverInstance: any
    let widthSet = false

    const classes = classNames([
        `w-select-${name}`,
        styles.select,
        disabled && styles.disabled,
        className
    ])

    const popoverClasses = classNames([
        `w-options-${name}`,
        styles.popover
    ])

    const open = () => {
        if (position === 'modal') {
            modal(`.w-options-${name}`)
        }
    }

    const select = (payload: any) => {
        closePopover(`.w-options-${name}`)

        value = payload.name

        onChange?.({
            select: name,
            ...payload
        })
    }

    onMount(() => {
        if (position !== 'modal') {
            if (!widthSet) {
                const selectElement = document.querySelector(`.w-select-${name}`) as HTMLInputElement

                const { width } = selectElement.getBoundingClientRect()
                const dialogElement = document.querySelector(`.w-options-${name}`) as HTMLDialogElement

                dialogElement.style.width = `${width}px`

                widthSet = true
            }

            popoverInstance = popover({
                trigger: `.w-select-${name}`,
                popover: `.w-options-${name}`,
                position: position as PopoverPosition
            })
        }

        return () => {
            popoverInstance?.remove()
        }
    })
</script>

<Input
    type="text"
    value={value}
    readonly={true}
    disabled={disabled}
    placeholder={placeholder}
    label={label}
    subText={subText}
    labelClassName={classes}
    onClick={open}
>
    {@html ArrowDown}
</Input>
{#if position === 'modal'}
    <Modal
        className={popoverClasses}
        showCloseIcon={false}
    >
        <List onSelect={select} {...$$restProps} />
    </Modal>
{:else}
    <Popover className={popoverClasses}>
        <List onSelect={select} {...$$restProps} />
    </Popover>
{/if}
