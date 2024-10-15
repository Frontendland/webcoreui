<script lang="ts">
    import type { IconListProps } from './iconList'

    import styles from './icon-list.module.scss'

    import { classNames } from 'webcoreui'

    export let items: IconListProps['items'] = []
    export let color: IconListProps['color'] = ''
    export let columns: IconListProps['columns'] = 0
    export let className: IconListProps['className'] = ''

    const classes = classNames([
        styles.list,
        columns && `columns-${columns}`,
        className
    ])

    const getColor = (color: string | undefined) => {
        return color
            ? `--w-icon-list-color: ${color};`
            : null
    }

    const styleVariables = [
        getColor(color),
        columns && `--w-icon-list-columns: ${columns};`
    ].filter(Boolean).join('')
</script>

<ul class={classes} style={styleVariables || null}>
    {#each items as item}
        <li style={getColor(item.color)}>
            {@html item.icon}
            <div>
                {@html item.text}
            </div>
        </li>
    {/each}
</ul>
