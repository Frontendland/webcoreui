<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLAttributes } from 'svelte/elements'
    import type { GridProps } from './grid'

    import { classNames } from '../../utils/classNames'
    import { getLayoutClasses } from '../../utils/getLayoutClasses'

    export type SvelteGridProps = {
        children: Snippet
    } & GridProps<HTMLAttributes<HTMLElement>>

    const {
        element = 'div',
        gap,
        column,
        className,
        children,
        ...rest
    }: SvelteGridProps = $props()

    const classes = $derived(classNames([
        'grid',
        getLayoutClasses({ gap, column }),
        className
    ]))

    const componentProps = $derived({
        class: classes
    })
</script>

<svelte:element this={element} {...componentProps} {...rest}>
    {@render children?.()}
</svelte:element>
