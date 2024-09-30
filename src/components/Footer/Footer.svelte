<script lang="ts">
    import type { FooterProps } from './footer'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './footer.module.scss'

    export let logo: FooterProps['logo'] = null
    export let columns: FooterProps['columns'] = []
    export let subText: FooterProps['subText'] = ''
    export let className: FooterProps['className'] = ''
    export let wrapperClassName: FooterProps['wrapperClassName'] = ''
    export let subTextClassName: FooterProps['subTextClassName'] = ''

    const classes = classNames([
        styles.footer,
        className
    ])

    const containerClasses = classNames([
        styles.container,
        wrapperClassName
    ])

    const subTextClasses = classNames([
        styles.subtext,
        subTextClassName
    ])
</script>

<footer class={classes}>
    <div class={containerClasses}>
        <ConditionalWrapper
            condition={!!(logo?.url || logo?.html)}
            class={styles.wrapper}
        >
            {#if logo?.url}
                <a href="/">
                    <img
                        src={logo.url}
                        alt={logo.alt || 'Logo'}
                        width={logo.width}
                        height={logo.height}
                        loading={logo.eager ? undefined : 'lazy'}
                    />
                </a>
            {/if}

            {#if logo?.html}
                <a href="/" aria-label={logo.alt || 'Logo'}>
                    {@html logo.html}
                </a>
            {/if}

            {#if columns?.length}
                <ConditionalWrapper
                    condition={columns.length > 1}
                    class={styles.columns}
                >
                    {#each columns as column}
                        <ConditionalWrapper condition={!!column.title}>
                            {#if column.title}
                                <strong class={styles['column-title']}>{column.title}</strong>
                            {/if}
                            <ul class={styles.column}>
                                {#each column.items as item}
                                    <li>
                                        <a
                                            href={item.href}
                                            target={item.target}
                                            class={item.active ? styles.active : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        </ConditionalWrapper>
                    {/each}
                </ConditionalWrapper>
            {/if}
        </ConditionalWrapper>
        {#if subText || $$slots.default}
            <div class={subTextClasses}>
                {#if subText}
                    <span>{@html subText}</span>
                {/if}
                <slot />
            </div>
        {/if}
    </div>
</footer>
