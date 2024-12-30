<script lang="ts">
    import type { SvelteTabsProps } from './tabs'

    import { classNames } from '../../utils/classNames'

    import styles from './tabs.module.scss'

    const {
        items,
        theme,
        vertical,
        even,
        className,
        children
    }: SvelteTabsProps = $props()

    let active = $state('')
    let tabContainer: HTMLDivElement | undefined = $state()

    const classes = classNames([
        styles.tabs,
        theme && styles[theme],
        vertical && styles.vertical,
        even && styles.even,
        className
    ])

    const setTab = (tab: string) => {
        const tabs = tabContainer!.querySelectorAll('[data-tab]')

        active = tab

        Array.from(tabs).forEach((item: any) => {
            item.dataset.active = false

            if (item.dataset.tab === active) {
                item.dataset.active = true
            }
        })
    }
</script>

<section class={classes}>
    <div class={styles.wrapper}>
        <div class={styles.items}>
            {#each items as item}
                <button
                    data-active={active ? active === item.value : item.active}
                    disabled={item.disabled}
                    onclick={() => setTab(item.value)}
                >
                    {@html item.label}
                </button>
            {/each}
        </div>
    </div>
    <div class={styles.content} bind:this={tabContainer}>
        {@render children?.()}
    </div>
</section>
