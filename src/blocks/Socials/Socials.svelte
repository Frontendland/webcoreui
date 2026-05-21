<script lang="ts">
    import { classNames } from 'webcoreui'
    import { Icon } from 'webcoreui/svelte'

    import { iconMap } from './iconMap'
    import type { SocialsProps } from './socials'
    import styles from './socials.module.scss'

    export type Props = SocialsProps

    const {
        links,
        size,
        color,
        theme,
        className
    }: Props = $props()

    const getDomain = (str: string) => {
        try {
            return new URL(str).hostname
                .replace('www.', '')
                .replace('twitter', 'x')
                .split('.')[0]
        } catch {
            return 'website'
        }
    }
</script>

{#if links?.length}
    <ul class={classNames([styles.socials, className])}>
        {#each links as link}
            <li>
                <a href={link} target="_blank" rel="noreferrer">
                    <Icon
                        iconSet={iconMap}
                        size={size}
                        color={color}
                        theme={theme}
                        type={iconMap[getDomain(link) as keyof typeof iconMap]
                            ? getDomain(link)
                            : 'website'
                        }
                    />
                </a>
            </li>
        {/each}
    </ul>
{/if}
