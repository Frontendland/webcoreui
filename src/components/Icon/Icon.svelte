<script lang="ts">
    import type { IconProps } from './icon'

    import Github from '../../icons/github.svg?raw'
    import ArrowDown from '../../icons/arrow-down.svg?raw'

    export let type: IconProps['type'] = ''
    export let size: IconProps['size'] = 24
    export let color: IconProps['color'] = ''

    const iconMap = {
        'github': Github,
        'arrow-down': ArrowDown
    }

    const icon = iconMap[type as keyof typeof iconMap]
        .replace('width="24"', `width=${size}`)
        .replace('height="24"', color
            ? `height=${size} color=${color}`
            : `height=${size}`)
</script>

{@html icon}
