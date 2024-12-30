<script lang="ts">
    import { classNames } from 'webcoreui'

    import type { IconListProps } from './iconList'
    import styles from './icon-list.module.scss'

    const {
        items,
        color,
        columns,
        className
    }: IconListProps = $props()

    const classes = classNames([
        styles.list,
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
