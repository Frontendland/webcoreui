<script lang="ts">
    import type { BottomNavigationProps } from './bottomnavigation'

    import { classNames } from '../../utils/classNames'

    import styles from './bottomnavigation.module.scss'

    const {
        items,
        separated,
        floating,
        maxWidth,
        className
    }: BottomNavigationProps = $props()

    const classes = classNames([
        styles.nav,
        separated && styles.separated,
        maxWidth && styles.bordered,
        floating && styles.floating,
        className
    ])

    const styleVariable = maxWidth
        ? `--w-bottom-navigation-max-width: ${maxWidth};`
        : null
</script>

<nav class={classes} style={styleVariable}>
    <ul>
        {#each items as item}
            <li data-tooltip={item.tooltip} class={classNames([item.icon && styles['with-icon']])}>
                <svelte:element
                    this={item.href ? 'a' : 'div'}
                    href={item.href}
                    target={item.target}
                    class={styles.item}
                >
                    {#if item.icon}
                        {@html item.icon}
                    {/if}
                    {item.name}
                </svelte:element>
            </li>
        {/each}
    </ul>
</nav>
