<script lang="ts">
    import { onMount } from 'svelte'
    import type { ThemeSwitcherProps } from './themeswitcher'
    
    import { classNames } from '../../utils/classNames'
    import { listen, dispatch } from '../../utils/event'
    import { setCookie, getCookie } from '../../utils/cookies'

    import styles from './themeswitcher.module.scss'

    export let themes: ThemeSwitcherProps['themes'] = {}
    export let toggle: ThemeSwitcherProps['toggle'] = false
    export let size: ThemeSwitcherProps['size'] = 20
    export let className: ThemeSwitcherProps['className'] = ''

    let currentTheme = ''
    let toggled = false

    const classes = classNames([
        styles.switcher,
        toggle && styles.toggle,
        className
    ])

    const primaryTheme = themes[Object.keys(themes)[0]]
    const secondaryTheme = themes[Object.keys(themes)[1]]
    const useIcons = $$slots.primaryIcon && $$slots.secondaryIcon 

    const setTheme = (theme: string | number) => {
        if (typeof theme === 'number') {
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
            style={!useIcons ? `background:${theme};` : undefined}
            data-active={currentTheme === themes[theme]}
            on:click={() => setTheme(toggle ? index : themes[theme])}
            class={classNames([
                styles.switch,
                useIcons && styles.icons
            ])}
        >
            {#if index === 0}<slot name="primaryIcon" />{/if}
            {#if index !== 0}<slot name="secondaryIcon" />{/if}
        </button>
    {/each}
</div>
