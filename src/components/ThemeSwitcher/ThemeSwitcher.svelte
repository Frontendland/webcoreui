<script lang="ts">
    import { onMount } from 'svelte'
    import type { SvelteThemeSwitcherProps } from './themeswitcher'

    import { classNames } from '../../utils/classNames'
    import { getCookie, setCookie } from '../../utils/cookies'
    import { dispatch, listen } from '../../utils/event'

    import styles from './themeswitcher.module.scss'

    const {
        themes,
        toggle,
        size,
        primaryIcon,
        secondaryIcon,
        className
    }: SvelteThemeSwitcherProps = $props()

    let currentTheme = $state('')
    let toggled = false

    const classes = classNames([
        styles.switcher,
        toggle && styles.toggle,
        className
    ])

    const primaryTheme = themes[Object.keys(themes)[0]]
    const secondaryTheme = themes[Object.keys(themes)[1]]
    const useIcons = primaryIcon && secondaryIcon

    const setTheme = (theme: string | number) => {
        if (typeof theme === 'number') {
            // eslint-disable-next-line no-param-reassign
            theme = toggled ? primaryTheme : secondaryTheme
        }

        document.body.classList.replace(currentTheme, theme)

        setCookie('w-theme', theme, 30)
        localStorage.setItem('w-theme', theme)

        dispatch('theme-switched', theme)
    }

    onMount(() => {
        currentTheme = localStorage.getItem('w-theme')
            || getCookie('w-theme')
            || themes[Object.keys(themes)[0]]

        if (toggle && currentTheme === secondaryTheme) {
            toggled = true
        }

        listen('theme-switched', theme => {
            currentTheme = theme
            toggled = currentTheme === secondaryTheme
        })
    })
</script>

<div
    class={classes}
    style={size ? `--w-theme-switcher-size: ${size}px;` : null}
>
    {#each Object.keys(themes) as theme, index}
        <button
            onclick={() => setTheme(toggle ? index : themes[theme])}
            style={!useIcons ? `background:${theme};` : undefined}
            data-active={currentTheme === themes[theme]}
            aria-label={themes[theme]}
            class={classNames([
                styles.switch,
                useIcons && styles.icons
            ])}
        >
            {#if index === 0}{@render primaryIcon?.()}{/if}
            {#if index !== 0}{@render secondaryIcon?.()}{/if}
        </button>
    {/each}
</div>
