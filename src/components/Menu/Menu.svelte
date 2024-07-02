<script lang="ts">
    import type { MenuProps } from './menu'

    import styles from './menu.module.scss'
    import { classNames } from '../../utils/classNames'

    export let items: MenuProps['items'] = []
    export let logo: MenuProps['logo'] = null
    export let centerLogo: MenuProps['centerLogo'] = false
    export let className: MenuProps['className'] = ''

    const classes = classNames([
        styles.menu,
        className
    ])

    let active = false

    const toggleMenu = () => active = !active
</script>

<header class={classes} data-active={active || null}>
    {#if logo?.url && !centerLogo}
        <a href="/">
            <img
                src={logo.url}
                alt={logo.alt || 'Logo'}
                width={logo.width}
                height={logo.height}
            />
        </a>
    {/if}

    {#if items}
        <ul>
            {#each items as item}
                <li>
                    <a href={item.url} target={item.target}>
                        {item.name}
                    </a>
                </li>
            {/each}
        </ul>
    {/if}

    <button class={styles.hamburger} on:click={toggleMenu}>
        <span class={styles.meat}></span>
        <span class={styles.meat}></span>
        <span class={styles.meat}></span>
        <span class={styles.meat}></span>
    </button>

    {#if logo?.url && centerLogo}
        <a href="/">
            <img
                src={logo.url}
                alt={logo.alt || 'Logo'}
                width={logo.width}
                height={logo.height}
            />
        </a>
    {/if}

    <slot />
</header>
