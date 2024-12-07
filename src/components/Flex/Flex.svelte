<script lang="ts">
    import type { FlexProps } from './flex'

    import { classNames } from '../../utils/classNames'
    import { getLayoutClasses } from '../../utils/getLayoutClasses'

    export let element: FlexProps['className'] = 'div'
    export let gap: FlexProps['gap'] = ''
    export let alignment: FlexProps['alignment'] = {}
    export let direction: FlexProps['direction'] = ''
    export let wrap: FlexProps['wrap'] = ''
    export let className: FlexProps['className'] = ''

    const classes = classNames([
        'flex',
        getLayoutClasses({ gap, alignment, direction, wrap }),
        className
    ])

    const props = {
        class: classes
    }
</script>

<svelte:element this={element} {...props} {...$$restProps}>
    <slot />
</svelte:element>
