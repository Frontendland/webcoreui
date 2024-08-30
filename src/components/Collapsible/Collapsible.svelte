<script lang="ts">
    import type { CollapsibleProps } from './collapsible'

    import { classNames } from '../../utils/classNames'

    import styles from './collapsible.module.scss'

    export let initialHeight: CollapsibleProps['initialHeight'] = ''
    export let maxHeight: CollapsibleProps['maxHeight'] = ''
    export let toggled: CollapsibleProps['toggled'] = false
    export let className: CollapsibleProps['className'] = ''
    export let togglesClassName: CollapsibleProps['togglesClassName'] = ''

    const classes = classNames([
        styles.collapsible,
        maxHeight && styles.animated,
        className
    ])

    const styleVariables = classNames([
        initialHeight && `--w-collapsible-initial-height: ${initialHeight};`,
        maxHeight && `--w-collapsible-max-height: ${maxHeight};`
    ])
</script>

<div
    class={classes}
    data-toggled={toggled ? 'true' : undefined}
>
    <div
        class={styles.wrapper}
        style={styleVariables}
    >
        <slot />
    </div>
    <div
        on:click={() => toggled = !toggled}
        on:keyup={() => toggled = !toggled}
        role="button"
        tabindex={0}
        class={togglesClassName}
    >
        {#if toggled}
            <slot name="off" />
        {:else}
            <slot name="on" />
        {/if}
    </div>
</div>
