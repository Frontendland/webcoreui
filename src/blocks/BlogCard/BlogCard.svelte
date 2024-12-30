<script lang="ts">
    import { classNames } from 'webcoreui'
    import {
        Card,
        ConditionalWrapper
    } from 'webcoreui/svelte'

    import type { BlogCardProps } from './blogCard'
    import styles from './blog-card.module.scss'

    const {
        href,
        target,
        img,
        title,
        text,
        secondary,
        className,
        ...rest
    }: BlogCardProps = $props()
</script>

<a href={href} target={target} class={classNames([styles.link, className])}>
    <Card
        {...rest}
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
