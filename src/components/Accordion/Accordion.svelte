<script lang="ts">
    import type { AccordionProps } from './accordion'

    import { classNames } from '../../utils/classNames'

    import ArrowDown from '../../icons/arrow-down.svg?raw'
    import Plus from '../../icons/plus.svg?raw'

    import styles from './accordion.module.scss'

    export let items: AccordionProps['items'] = []
    export let icon: AccordionProps['icon'] = null
    export let reverse: AccordionProps['reverse'] = false
    export let className: AccordionProps['className'] = ''

    let state = Array(items.length).fill(false)

    const toggle = (index: number) => {
        state = state.map((_, i) => index === i
            ? !state[i]
            : state[i]
        )
    }

    const classes = classNames([
        styles.accordion,
        reverse && styles.reverse,
        icon === 'plus' && styles.plus,
        className
    ])
</script>

<ul class={classes}>
    {#each items as item, index}
        <li>
            <button
                class={classNames([
                    styles.title,
                    item.reverse && styles.reverse
                ])}
                data-open={state[index]}
                on:click={() => toggle(index)}
            >
                {item.title}
                {#if icon !== 'none'}
                    {@html icon === 'plus' ? Plus : ArrowDown}
                {/if}
            </button>
            <div class={styles.wrapper}>
                <div class={styles.content}>
                    {@html item.content}
                </div>
            </div>
        </li>
    {/each}
</ul>
