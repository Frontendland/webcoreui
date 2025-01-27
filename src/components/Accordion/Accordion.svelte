<script lang="ts">
    import type { AccordionProps } from './accordion'

    import { classNames } from '../../utils/classNames'

    import ChevronDown from '../../icons/chevron-down.svg?raw'
    import Plus from '../../icons/plus.svg?raw'

    import styles from './accordion.module.scss'

    const {
        items,
        icon,
        reverse,
        className
    }: AccordionProps = $props()

    let toggleState = $state(Array(items.length).fill(false))

    const toggle = (index: number) => {
        toggleState = toggleState.map((_, i) => index === i
            ? !toggleState[i]
            : toggleState[i]
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
                data-open={toggleState[index]}
                onclick={() => toggle(index)}
            >
                {item.title}
                {#if icon !== 'none'}
                    {@html icon === 'plus' ? Plus : ChevronDown}
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
