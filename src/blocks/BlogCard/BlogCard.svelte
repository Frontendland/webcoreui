<script lang="ts">
    import type { BlogCardProps } from './blogCard'

    import styles from './blog-card.module.scss'

    import { classNames } from 'webcoreui'
    import {
        Card,
        ConditionalWrapper
    } from 'webcoreui/svelte'

    const defaultImg = { src: '', alt: '', width: 0, height: 0 }

    export let href: BlogCardProps['href'] = ''
    export let target: BlogCardProps['target'] = ''
    export let img: BlogCardProps['img'] = defaultImg
    export let title: BlogCardProps['title'] = ''
    export let text: BlogCardProps['text'] = ''
    export let secondary: BlogCardProps['secondary'] = false
    export let className: BlogCardProps['className'] = ''
</script>

<a href={href} target={target} class={classNames([styles.link, className])}>
    <Card
        {...$$restProps}
        className={styles.card}
        bodyClassName={classNames([styles.body, secondary && styles.secondary])}
        secondary={true}
    >
        <img
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading={img.lazy ? 'lazy' : undefined}
        />
        <ConditionalWrapper condition={!!text}>
            {#if title}
                <strong>{title}</strong>
            {/if}
            {#if text}
                <div class="muted">
                    {@html text}
                </div>
            {/if}
        </ConditionalWrapper>
    </Card>
</a>
