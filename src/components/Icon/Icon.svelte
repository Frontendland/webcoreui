<script lang="ts">
    import type { IconProps } from './icon'
    import iconMap from './map'

    export let type: IconProps['type'] = 'alert'
    export let size: IconProps['size'] = 24
    export let color: IconProps['color'] = ''

    const icon = iconMap[type as keyof typeof iconMap]
        .replace('width="24"', `width=${size}`)
        .replace('height="24"', color
            ? `height=${size} color=${color}`
            : `height=${size}`)
</script>

{@html icon}
