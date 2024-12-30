<script lang="ts">
    import type { IconProps } from './icon'
    import iconMap from './map'

    const {
        type,
        size = 24,
        color
    }: IconProps = $props()

    const icon = iconMap[type as keyof typeof iconMap]
        .replace('width="24"', `width=${size}`)
        .replace('height="24"', color
            ? `height=${size} color=${color}`
            : `height=${size}`)
</script>

{@html icon}
