<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { ConditionalWrapperProps } from './conditionalwrapper'

    export type Props = ConditionalWrapperProps & {
        children: Snippet
        element?: string
    }

    const {
        condition,
        element = 'div',
        children,
        ...rest
    }: Props = $props()
</script>

{#if condition}
    <svelte:element this={element} {...rest}>
        {@render children?.()}
    </svelte:element>
{:else}
    {@render children?.()}
{/if}
