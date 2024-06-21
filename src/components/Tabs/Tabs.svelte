<script lang="ts">
    import type { TabsProps } from './tabs'
    import './tabs.scss'

    export let className: TabsProps['className'] = ''

    const classes = [
        'w-tabs',
        className
    ].filter(Boolean).join(' ')
</script>