<script lang="ts">
    import { onMount } from 'svelte'
    import type { SvelteContextMenuProps } from './contextmenu'

    import { classNames } from '../../utils/classNames'
    import { on } from '../../utils/DOMUtils'

    import styles from './contextmenu.module.scss'

    const {
        element = 'div',
        className,
        children,
        context,
        ...rest
    }: SvelteContextMenuProps = $props()

    const classes = classNames([
        styles.ctx,
        className
    ])

    const showContext = (event: MouseEvent) => {
        event.preventDefault()

        if (content) {
            const target = event.currentTarget as HTMLElement
            const rect = target.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            content.style.top = `${y}px`
            content.style.left = `${x}px`
            content.dataset.show = 'true'
        }
    }

    const hideContext = (event: MouseEvent) => {
        if (content) {
            if (content.contains(event.target as Node)) {
                return
            }

            content.dataset.show = 'false'

            setTimeout(() => {
                if (content) {
                    content.style.top = ''
                    content.style.left = ''
                }
            }, 200)
        }
    }

    let ctx: HTMLElement
    let content: HTMLDivElement

    onMount(() => {
        if (ctx && content) {
            on(ctx, 'contextmenu', showContext)
            on(document, 'click', hideContext)
        }

        return () => {
            ctx?.removeEventListener('contextmenu', showContext)
            document.removeEventListener('click', hideContext)
        }
    })

    if (!context) {
        // eslint-disable-next-line no-console, max-len
        console.error('Missing "context" slot. Attach slot="context" to one of the children of your <ContextMenu> component.')
    }
</script>

<svelte:element {...rest} this={element} class={classes} bind:this={ctx}>
    {@render children?.()}
    <div class={styles.content} bind:this={content}>
        {@render context?.()}
    </div>
</svelte:element>
