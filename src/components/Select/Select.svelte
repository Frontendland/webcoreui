<script lang="ts">
    import { onMount } from 'svelte'
    import type { SvelteSelectProps } from './select'

    import Input from '../Input/Input.svelte'
    import List from '../List/List.svelte'
    import Modal from '../Modal/Modal.svelte'
    import Popover from '../Popover/Popover.svelte'

    import { classNames } from '../../utils/classNames'
    import { debounce } from '../../utils/debounce'
    import { modal } from '../../utils/modal'
    import { closePopover, popover, type PopoverPosition } from '../../utils/popover'

    import ArrowDown from '../../icons/arrow-down.svg?raw'

    import styles from './select.module.scss'

    import type { ListEventType } from '../List/list'

    export let name: SvelteSelectProps['name'] = ''
    export let value: SvelteSelectProps['value'] = ''
    export let placeholder: SvelteSelectProps['placeholder'] = ''
    export let label: SvelteSelectProps['label'] = ''
    export let subText: SvelteSelectProps['subText'] = ''
    export let disabled: SvelteSelectProps['disabled'] = false
    export let updateValue: SvelteSelectProps['updateValue'] = true
    export let position: SvelteSelectProps['position'] = 'bottom'
    export let className: SvelteSelectProps['className'] = ''
    export let onChange: SvelteSelectProps['onChange'] = () => {}

    let popoverInstance: any

    const classes = classNames([
        styles.select,
        disabled && styles.disabled,
        className
    ])

    const popoverClasses = classNames([
        `w-options-${name}`,
        styles.popover
    ])

    const select = (event: ListEventType) => {
        closePopover(`.w-options-${name}`)

        if (updateValue) {
            value = event.name
        }

        onChange?.({
            ...event,
            select: name
        })
    }

    onMount(() => {
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
            const resize = debounce(() => {
                const selectElement = document.querySelector(`.w-select-${name}`) as HTMLInputElement

                const { width } = selectElement.getBoundingClientRect()
                const dialogElement = document.querySelector(`.w-options-${name}`) as HTMLDialogElement

                dialogElement.style.width = `${width}px`
            })

            new ResizeObserver(() => resize()).observe(document.body)

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
    className={`w-select-${name}`}
    labelClassName={classes}
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
