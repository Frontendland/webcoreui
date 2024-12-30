<script lang="ts">
    import { onMount } from 'svelte'
    import type { SvelteSelectProps } from './select'

    import Input from '../Input/Input.svelte'
    import List from '../List/List.svelte'
    import Modal from '../Modal/Modal.svelte'
    import Popover from '../Popover/Popover.svelte'

    import { classNames } from '../../utils/classNames'
    import { debounce } from '../../utils/debounce'
    import { on } from '../../utils/DOMUtils'
    import { modal } from '../../utils/modal'
    import { closePopover, popover, type PopoverPosition } from '../../utils/popover'

    import ArrowDown from '../../icons/arrow-down.svg?raw'

    import styles from './select.module.scss'

    import type { ListEventType, ListProps } from '../List/list'

    const {
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
        onClose,
        ...rest
    }: SvelteSelectProps = $props()

    let popoverInstance: any
    let val: string | undefined = $state('')
    let focusByTab = false

    const classes = classNames([
        styles.select,
        disabled && styles.disabled,
        className
    ])

    const popoverClasses = classNames([
        `w-options-${name}`,
        styles.popover
    ])

    const inferredValue = rest.itemGroups
        .map((group: ListProps['itemGroups'][0]) => group.items)
        .flat()
        .find((item: ListProps['itemGroups'][0]['items'][0]) => item.value === value)?.name

    val = (value && inferredValue) ? inferredValue : value

    const inputRestProps = Object.fromEntries(
        Object.entries(rest).filter(([key]) => key.includes('data'))
    )

    const select = (event: ListEventType) => {
        closePopover(`.w-options-${name}`)

        if (updateValue) {
            val = event.name
        }

        onChange?.({
            ...event,
            select: name
        })
    }

    onMount(() => {
        let observer: ResizeObserver | undefined

        on(document, 'keydown', (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                focusByTab = true
            }
        })

        on(document, 'mousedown', () => focusByTab = false)

        if (position === 'modal') {
            modal({
                trigger: `.w-select-${name}`,
                modal: `.w-options-${name}`,
                onOpen: ({ modal }) => {
                    const search = modal.querySelector('input')

                    if (search) {
                        search.focus()
                    }
                },
                onClose(event) {
                    onClose?.(event)
                }
            })
        } else {
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
                },
                onClose(event) {
                    onClose?.(event)
                }
            })
        }

        on(`.w-select-${name}`, 'focus', (event: Event) => {
            if (focusByTab) {
                (event.currentTarget as HTMLInputElement).click()
            }
        })

        return () => {
            popoverInstance?.remove()
            observer?.unobserve(document.body)
        }
    })
</script>

<Input
    type="text"
    value={val}
    readonly={true}
    disabled={disabled}
    placeholder={placeholder}
    label={label}
    subText={subText}
    className={`w-select-${name}`}
    labelClassName={classes}
    {...inputRestProps}
>
    {@html ArrowDown}
</Input>
{#if position === 'modal'}
    <Modal
        className={popoverClasses}
        showCloseIcon={false}
    >
        <List onSelect={select} {...rest} />
    </Modal>
{:else}
    <Popover className={popoverClasses}>
        <List onSelect={select} {...rest} />
    </Popover>
{/if}
