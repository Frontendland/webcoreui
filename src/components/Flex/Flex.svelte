<script lang="ts">
    import type { SvelteFlexProps } from './flex'

    import { classNames } from '../../utils/classNames'
    import { getLayoutClasses } from '../../utils/getLayoutClasses'

    const {
        element = 'div',
        gap,
        alignment,
        direction,
        wrap,
        className,
        children,
        ...rest
    }: SvelteFlexProps = $props()

    const classes = classNames([
        'flex',
        getLayoutClasses({ gap, alignment, direction, wrap }),
        className
    ])

    const componentProps = {
        class: classes
    }
</script>

<svelte:element this={element} {...componentProps} {...rest}>
    {@render children?.()}
</svelte:element>
