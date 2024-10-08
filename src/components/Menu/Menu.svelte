<script lang="ts">
    import type { MenuProps } from './menu'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './menu.module.scss'

    export let items: MenuProps['items'] = []
    export let logo: MenuProps['logo'] = null
    export let centerLogo: MenuProps['centerLogo'] = false
    export let className: MenuProps['className'] = ''
    export let wrapperClassName: MenuProps['wrapperClassName'] = ''

    const classes = classNames([
        styles.menu,
        className
    ])

    const containerClasses = classNames([
        styles.container,
        wrapperClassName
    ])

    const wrapMenu = (logo?.url || logo?.html) && items?.length && $$slots.default

    let active = false

    const toggleMenu = () => active = !active
</script>

<header class={classes} data-active={active || null}>
    <div class={containerClasses}>
        <ConditionalWrapper condition={!!wrapMenu} class={styles.wrapper}>
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

            {#if !centerLogo && logo?.html}
                <a href="/" aria-label={logo.alt || 'Logo'}>
                    {@html logo.html}
                </a>
            {/if}

            {#if items?.length}
                <ul>
                    {#each items as item}
                        <li>
                            <a
                                href={item.href}
                                target={item.target}
                                class={item.active ? styles.active : null}
                            >
                                {item.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </ConditionalWrapper>

        {#if items?.length}
            <button class={styles.hamburger} on:click={toggleMenu}>
                <span class={styles.meat}></span>
                <span class={styles.meat}></span>
                <span class={styles.meat}></span>
                <span class={styles.meat}></span>
            </button>
        {/if}

        {#if centerLogo && logo?.html}
            <a href="/" aria-label={logo.alt || 'Logo'}>
                {@html logo.html}
            </a>
        {/if}

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
    </div>
</header>
