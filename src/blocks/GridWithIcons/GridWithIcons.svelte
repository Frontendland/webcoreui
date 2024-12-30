<script lang="ts">
    import { classNames } from 'webcoreui'
    import { ConditionalWrapper } from 'webcoreui/svelte'

    import type { GridWithIconsProps } from './gridWithIcons'
    import styles from './grid-with-icons.module.scss'

    const {
        items = [],
        columns,
        alignment,
        iconWithBackground,
        secondary,
        className
    }: GridWithIconsProps = $props()

    const classes = classNames([
        `grid sm-${columns || 3}`,
        styles.list,
        alignment && styles[alignment],
        iconWithBackground && styles['icon-bg'],
        secondary && styles.secondary,
        className
    ])

    const wrapperClasses = classNames([
        'flex sm items-center',
        alignment === 'center' && 'justify-center',
        alignment === 'right' && 'justify-end'
    ])
</script>

<ul class={classes}>
    {#each items as item}
        <li class="grid sm">
            <ConditionalWrapper
                condition={!!secondary}
                class={wrapperClasses}
            >
                {#if item.icon}
                    {@html item.icon}
                {/if}

                {#if item.title}
                    <strong class={styles.title}>{item.title}</strong>
                {/if}
            </ConditionalWrapper>
            <div class="muted">{@html item.text}</div>
        </li>
    {/each}
</ul>
