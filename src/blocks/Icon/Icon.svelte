<script lang="ts">
    import IconComponent from '@components/Icon/Icon.svelte'

    import type { CustomIconProps } from './icon'
    import iconSet from './iconSet'

    const props: CustomIconProps = $props()
</script>

<IconComponent iconSet={iconSet} {...props} />
