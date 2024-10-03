<script lang="ts">
    import type { SvelteMasonryProps } from './masonry'

    import { classNames } from '../../utils/classNames'

    import styles from './masonry.module.scss'

    export let items: SvelteMasonryProps['items'] = []
    export let element: SvelteMasonryProps['element'] = 'section'
    export let gap: SvelteMasonryProps['gap'] = ''
    export let columns: SvelteMasonryProps['columns'] = 3
    export let sequential: SvelteMasonryProps['sequential'] = false
    export let className: SvelteMasonryProps['className'] = ''

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
                    <svelte:component this={item.component} {...item.props}>
                        {#if typeof item.children === 'object' && item.children.component}
                            <svelte:component this={item.children.component} {...item.children.props}>
                                {@html item.children.children}
                            </svelte:component>
                        {:else}
                            {@html item.children}
                        {/if}
                    </svelte:component>
                {:else}
                    {@html item.html}
                {/if}
            {/each}
        </div>
    {/each}
</svelte:element>
