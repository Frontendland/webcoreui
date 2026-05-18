<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { ConditionalWrapperProps } from './conditionalwrapper'

    export type SvelteConditionalWrapperProps = {
        children: Snippet
    } & ConditionalWrapperProps

    const {
        condition,
        element = 'div',
        children,
        ...rest
    }: SvelteConditionalWrapperProps = $props()
</script>

{#if condition}
    <svelte:element this={element} {...rest}>
        {@render children?.()}
    </svelte:element>
{:else}
    {@render children?.()}
{/if}
