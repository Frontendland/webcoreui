<script lang="ts">
    import type { SvelteGridProps } from './grid'

    import { classNames } from '../../utils/classNames'
    import { getLayoutClasses } from '../../utils/getLayoutClasses'

    const {
        element = 'div',
        gap,
        column,
        className,
        children,
        ...rest
    }: SvelteGridProps = $props()

    const classes = classNames([
        'grid',
        getLayoutClasses({ gap, column }),
        className
    ])

    const componentProps = {
        class: classes
    }
</script>

<svelte:element this={element} {...componentProps} {...rest}>
    {@render children?.()}
</svelte:element>
