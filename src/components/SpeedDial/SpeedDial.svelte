<script lang="ts">
    import { onMount } from 'svelte'
    import type { SpeedDialProps } from './speeddial'

    import Button from '../Button/Button.svelte'

    import { classNames } from '../../utils/classNames'
    import { get, on } from '../../utils/DOMUtils'

    import styles from './speeddial.module.scss'

    const {
        items,
        position,
        horizontal,
        circular,
        theme,
        icon,
        triggerOnClick,
        className
    }: SpeedDialProps = $props()

    let show = $state(false)

    const classes = classNames([
        styles.dial,
        position && styles[position],
        horizontal && styles.horizontal,
        circular && styles.circular,
        className
    ])

    const getTooltipPosition = () => {
        const positionMap = {
            'top-left': 'right',
            'bottom-left': 'right',
            'horizontal': {
                'top-left': 'bottom',
                'top-right': 'bottom'
            }
        }

        return horizontal
            ? positionMap.horizontal[position as keyof typeof positionMap.horizontal]
            : positionMap[position as keyof typeof positionMap] || 'left'
    }

    const toggle = () => show = !show

    onMount(() => {
        const speedDial = get('[data-id="w-speed-dial"] button') as HTMLButtonElement

        const eventListener = (event: Event) => {
            if (!speedDial.contains((event.target || event.currentTarget) as HTMLElement)) {
                show = false
            }
        }

        on(document, 'click', eventListener)

        return () => {
            document.removeEventListener('click', eventListener)
        }
    })
</script>

{#if items?.length}
    <div
        class={classes}
        data-id={triggerOnClick ? 'w-speed-dial' : null}
        data-show={triggerOnClick ? show : null}
    >
        <Button
            className={styles.trigger}
            onClick={triggerOnClick ? toggle : undefined}
            {...(theme && { theme })}
        >
            {#if icon}
                {@html icon}
            {:else}
                <span>+</span>
            {/if}
        </Button>

        <ul class={styles.list}>
            {#each items as item}
                <li>
                    <Button
                        data-tooltip={item.tooltip}
                        data-position={getTooltipPosition()}
                        {...(theme && { theme })}
                        href={item.href}
                        target={item.target}
                        className={styles.button}
                    >
                        {@html item.icon}
                    </Button>
                </li>
            {/each}
        </ul>
    </div>
{/if}
