<script lang="ts">
    import type { TabsProps } from './tabs'
    import './tabs.scss'

    export let items: TabsProps['items'] = []
    export let theme: TabsProps['theme'] = null
    export let vertical: TabsProps['vertical'] = false
    export let even: TabsProps['even'] = false
    export let className: TabsProps['className'] = ''

    let active = ''
    let tabContainer: HTMLDivElement

    const classes = [
        'w-tabs',
        theme && theme,
        vertical && 'vertical',
        even && 'even',
        className
    ].filter(Boolean).join(' ')

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
    <div class="tabs">
        {#each items as item}
            <button
                class:active={active ? active === item.value : item.active}
                disabled={item.disabled}
                on:click={() => setTab(item.value)}
            >
                {@html item.label}
            </button>
        {/each}
    </div>
    <div class="tab-content" bind:this={tabContainer}>
        <slot />
    </div>
</section>
