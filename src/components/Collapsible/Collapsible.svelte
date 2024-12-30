<script lang="ts">
    import type { SvelteCollapsibleProps } from './collapsible'

    import { classNames } from '../../utils/classNames'

    import styles from './collapsible.module.scss'

    let {
        initialHeight,
        maxHeight,
        toggled = $bindable(),
        className,
        togglesClassName,
        children,
        off,
        on
    }: SvelteCollapsibleProps = $props()

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
        {@render children?.()}
    </div>
    <div
        onclick={() => toggled = !toggled}
        onkeyup={() => toggled = !toggled}
        role="button"
        tabindex={0}
        class={togglesClassName}
    >
        {#if toggled}
            {@render off?.()}
        {:else}
            {@render on?.()}
        {/if}
    </div>
</div>
