<script lang="ts">
    import type { GridProps } from './grid'

    import { classNames } from '../../utils/classNames'
    import { getLayoutClasses } from '../../utils/getLayoutClasses'

    export let element: GridProps['className'] = 'div'
    export let gap: GridProps['gap'] = ''
    export let column: GridProps['column'] = null
    export let className: GridProps['className'] = ''

    const classes = classNames([
        'grid',
        getLayoutClasses({ gap, column }),
        className
    ])

    const props = {
        class: classes
    }
</script>

<svelte:element this={element} {...props} {...$$restProps}>
    <slot />
</svelte:element>
