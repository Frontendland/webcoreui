<script lang="ts">
    import { onMount, type Snippet } from 'svelte'
    import type { TabsProps } from './tabs'

    import { classNames } from '../../utils/classNames'

    import styles from './tabs.module.scss'

    export type Props = TabsProps & {
        children: Snippet
    }

    const {
        items,
        theme,
        vertical,
        even,
        className,
        children
    }: Props = $props()

    let active = $state('')
    let tabContainer: HTMLDivElement | undefined = $state()

    const usedInAstro = $derived(tabContainer?.children[0]?.nodeName === 'ASTRO-SLOT')
    const hasActive = $derived(items.some(item => item.active))
    const itemsState = $derived.by(() => {
        if (!hasActive) {
            items[0].active = true
        }

        return items
    })

    const classes = $derived(classNames([
        styles.tabs,
        theme && styles[theme],
        vertical && styles.vertical,
        even && styles.even,
        className
    ]))

    const setTab = (tab: string, index: number) => {
        const contentChildren = usedInAstro
            ? Array.from(tabContainer!.children[0].children) as HTMLElement[]
            : Array.from(tabContainer!.children) as HTMLElement[]

        const hasExplicitTabs = contentChildren.some((el: HTMLElement) => el.dataset.tab)

        contentChildren.forEach((item: HTMLElement, i: number) => {
            if (hasExplicitTabs) {
                item.dataset.active = item.dataset.tab === tab ? 'true' : 'false'
            } else {
                item.dataset.active = i === index ? 'true' : 'false'
            }
        })

        active = tab
    }

    onMount(() => {
        const contentChildren = usedInAstro
            ? Array.from(tabContainer!.children[0].children) as HTMLElement[]
            : Array.from(tabContainer!.children) as HTMLElement[]

        if (!contentChildren.some(element => element.dataset.active === 'true')) {
            const index = itemsState.findIndex(item => item.active)

            if (contentChildren[index]) {
                contentChildren[index].dataset.active = 'true'
            }
        }
    })
</script>

<section class={classes}>
    <div class={styles.wrapper}>
        <div class={styles.items}>
            {#each itemsState as item, i}
                <button
                    data-active={active ? active === item.value : item.active}
                    disabled={item.disabled}
                    onclick={() => setTab(item.value, i)}
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
