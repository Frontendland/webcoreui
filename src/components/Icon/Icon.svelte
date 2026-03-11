<script lang="ts">
    import type { IconProps } from './icon'
    import iconMap from './map'

    const {
        type,
        size = 24,
        color,
        theme,
        iconSet
    }: IconProps = $props()

    const icons = $derived({
        ...iconMap,
        ...(iconSet || {})
    })

    const svg = $derived.by(() => {
        const icon = icons[type as keyof typeof iconMap]

        if (!icon) {
            // eslint-disable-next-line no-console
            console.error('Cannot find icon type:', type)
        }

        return icon
    })

    const icon = $derived(svg
        ?.replace('width="24"', `width=${size}`)
        ?.replace('height="24"', color || theme
            ? `height=${size} color=${color || `var(--w-color-${theme})`}`
            : `height=${size}`)
    )
</script>

{@html icon}
