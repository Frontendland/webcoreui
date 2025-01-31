<script lang="ts">
    import { Icon as IconComponent } from 'webcoreui/svelte'

    import type { CustomIconProps } from './icon'
    import iconSet from './iconSet'

    const props: CustomIconProps = $props()
</script>

<IconComponent iconSet={iconSet} {...props} />
