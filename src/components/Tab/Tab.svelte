<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLAttributes } from 'svelte/elements'
    import type { TabProps } from './tab'

    export type Props = TabProps<HTMLAttributes<HTMLElement>> & {
        children: Snippet
    }

    const {
        element = 'div',
        id,
        active,
        className,
        children,
        ...rest
    }: Props = $props()
</script>

<svelte:element
    {...rest}
    {...(className && { class: className })}
    this={element}
    data-tab={id}
    data-active={active}
>
    {@render children?.()}
</svelte:element>
