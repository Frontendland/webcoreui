<script lang="ts">
    import type { TabsProps } from './tabs'

    import { classNames } from '../../utils/classNames'

    import styles from './tabs.module.scss'

    export let items: TabsProps['items'] = []
    export let theme: TabsProps['theme'] = null
    export let vertical: TabsProps['vertical'] = false
    export let even: TabsProps['even'] = false
    export let className: TabsProps['className'] = ''

    let active = ''
    let tabContainer: HTMLDivElement

    const classes = classNames([
        styles.tabs,
        theme && styles[theme],
        vertical && styles.vertical,
        even && styles.even,
        className
    ])

    const setTab = (tab: string) => {
        const tabs = tabContainer.querySelectorAll('[data-tab]')

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
                    on:click={() => setTab(item.value)}
                >
                    {@html item.label}
                </button>
            {/each}
        </div>
    </div>
    <div class={styles.content} bind:this={tabContainer}>
        <slot />
    </div>
</section>
