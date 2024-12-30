<script lang="ts">
    import { classNames } from 'webcoreui'
    import { Accordion } from 'webcoreui/svelte'

    import type { SvelteFAQProps } from './faq'
    import styles from './faq.module.scss'

    const {
        element = 'section',
        title = 'Frequently Asked Questions',
        titleTag = 'h2',
        items,
        className,
        children,
        ...rest
    }: SvelteFAQProps = $props()

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
        {@render children?.()}
    </div>
    <Accordion items={items} className={styles.accordion} {...rest} />
</svelte:element>
