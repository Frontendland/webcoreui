<script lang="ts">
    import type { SvelteMasonryProps } from './masonry'

    import { classNames } from '../../utils/classNames'

    import styles from './masonry.module.scss'

    const {
        items,
        element = 'section',
        gap,
        columns = 3,
        sequential,
        className
    }: SvelteMasonryProps = $props()

    const classes = classNames([
        styles.masonry,
        className
    ])

    const componentProps = {
        class: classes,
        style: gap ? `--w-masonry-gap: ${gap};` : null
    }

    const chunkSize = Math.ceil(items.length / columns!)
    const columnGroups = Array.from({ length: columns! }, (_, i) => {
        return sequential
            ? items.slice(i * chunkSize, (i + 1) * chunkSize)
            : items.filter((_, index) => index % columns! === i)
    })
</script>


<svelte:element this={element} {...componentProps}>
    {#each columnGroups as group}
        <div class={styles.column}>
            {#each group as item}
                {#if item.component}
                    <item.component {...item.props}>
                        {#if typeof item.children === 'object' && item.children.component}
                            <item.children.component {...item.children.props}>
                                {@html item.children.children}
                            </item.children.component>
                        {:else}
                            {@html item.children}
                        {/if}
                    </item.component>
                {:else}
                    {@html item.html}
                {/if}
            {/each}
        </div>
    {/each}
</svelte:element>
