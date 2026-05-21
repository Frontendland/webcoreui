<script lang="ts">
    import { Icon as IconComponent } from 'webcoreui/svelte'

    import type { CustomIconProps } from './icon'
    import iconSet from './iconSet'

    export type Props = CustomIconProps

    const props: Props = $props()
</script>

<IconComponent iconSet={iconSet} {...props} />
