<script lang="ts">
    import type { BreadcrumbProps } from './breadcrumb'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import ArrowRight from '../../icons/arrow-right.svg?raw'

    import styles from './breadcrumb.module.scss'

    export let items: BreadcrumbProps['items'] = []
    export let separator: BreadcrumbProps['separator'] = ''
    export let className: BreadcrumbProps['className'] = ''

    const classes = classNames([
        styles.breadcrumb,
        className
    ])
</script>

<ul class={classes}>
    {#each items as item, index}
        <li>
            <ConditionalWrapper
                condition={!!(item.href && index !== items.length - 1)}
                element="a"
                href={item.href}
                target={item.target}
            >
                {#if item.icon}
                    {@html item.icon}
                {/if}
                {#if item.label}
                    {item.label}
                {/if}
            </ConditionalWrapper>
        </li>
        {#if index < items.length - 1 }
            <li>
                {@html separator || ArrowRight}
            </li>
        {/if}
    {/each}
</ul>
