<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLAttributes } from 'svelte/elements'
    import type { FlexProps } from './flex'

    import { classNames } from '../../utils/classNames'
    import { getLayoutClasses } from '../../utils/getLayoutClasses'

    export type Props = FlexProps<HTMLAttributes<HTMLElement>> & {
        children: Snippet
    }

    const {
        element = 'div',
        gap,
        alignment,
        direction,
        wrap,
        className,
        children,
        ...rest
    }: Props = $props()

    const classes = $derived(classNames([
        'flex',
        getLayoutClasses({ gap, alignment, direction, wrap }),
        className
    ]))

    const componentProps = $derived({
        class: classes
    })
</script>

<svelte:element this={element} {...componentProps} {...rest}>
    {@render children?.()}
</svelte:element>
