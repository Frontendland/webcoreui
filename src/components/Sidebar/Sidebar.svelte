<script lang="ts">
    import type { SvelteSidebarProps } from './sidebar'

    import Badge from '../Badge/Badge.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './sidebar.module.scss'

    const {
        groups,
        children,
        className
    }: SvelteSidebarProps = $props()

    const classes = classNames([
        styles.sidebar,
        className
    ])
</script>

<aside class={classes}>
    {#each groups as group}

        {#if group.title}
            <strong>{group.title}</strong>
        {/if}

        <ul>
            {#each group.items as item}
                <li>
                    <a
                        href={item.href}
                        target={item.target}
                        class={item.active ? styles.active : undefined}
                    >
                        {#if item.icon}
                            {@html item.icon}
                        {/if}
                        {item.name}
                        {#if item.badge}
                            <Badge theme={item.badgeTheme || 'success'} small={true}>
                                {item.badge}
                            </Badge>
                        {/if}
                    </a>
                </li>
            {/each}
        </ul>
    {/each}

    {@render children?.()}
</aside>
