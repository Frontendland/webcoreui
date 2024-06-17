<script lang="ts">
    import type { ConditionalWrapperProps } from './conditionalwrapper'

    export let condition: ConditionalWrapperProps['condition']
    export let element: string
</script>

{#if condition}
    <svelte:element this={element} {...$$restProps}>
        <slot />
    </svelte:element>
{:else}
    <slot />
{/if}
