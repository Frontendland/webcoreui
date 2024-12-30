<script lang="ts">
    import type { SvelteMenuProps } from './menu'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './menu.module.scss'

    const {
        items,
        logo,
        centerLogo,
        className,
        wrapperClassName,
        children
    }: SvelteMenuProps = $props()

    const classes = classNames([
        styles.menu,
        className
    ])

    const containerClasses = classNames([
        styles.container,
        wrapperClassName
    ])

    const wrapMenu = (logo?.url || logo?.html)
        && items?.length
        && children

    let active = $state(false)

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
            <button
                class={styles.hamburger}
                onclick={toggleMenu}
                aria-label="menu"
            >
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

        {@render children?.()}
    </div>
</header>
