<script lang="ts">
    import type { FAQProps } from './faq'

    import styles from './faq.module.scss'

    import { classNames } from 'webcoreui'
    import {
        Accordion
    } from 'webcoreui/svelte'

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

<svelte:element this={element} class={classes} {...$$restProps}>
    <div>
        <svelte:element this={titleTag} class={styles.title}>
            {title}
        </svelte:element>
        <slot />
    </div>
    <Accordion items={items} className={styles.accordion} />
</svelte:element>
