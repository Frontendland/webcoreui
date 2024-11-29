<script lang="ts">
    import { classNames } from 'webcoreui'
    import { Accordion } from 'webcoreui/svelte'

    import type { FAQProps } from './faq'
    import styles from './faq.module.scss'

    export let element: FAQProps['element'] = 'section'
    export let title: FAQProps['title'] = 'Frequently Asked Questions'
    export let titleTag: FAQProps['titleTag'] = 'h2'
    export let items: FAQProps['items']
    export let className: FAQProps['className'] = ''

    const classes = classNames([
        styles.faq,
        className
    ])
</script>

<svelte:element this={element} class={classes}>
    <div class={styles.col}>
        <svelte:element this={titleTag} class={styles.title}>
            {title}
        </svelte:element>
        <slot />
    </div>
    <Accordion items={items} className={styles.accordion} {...$$restProps} />
</svelte:element>
