<script lang="ts">
    import type { AvatarProps } from './avatar'
    import './avatar.scss'

    export let img: AvatarProps['img'] = ''
    export let alt: AvatarProps['alt'] = 'Avatar'
    export let size: AvatarProps['size'] = 40
    export let lazy: AvatarProps['lazy'] = true
    export let borderColor: AvatarProps['borderColor'] = ''
    export let borderless: AvatarProps['borderless'] = false
    export let reverse: AvatarProps['reverse'] = false
    export let className: AvatarProps['className'] = ''

    const classes = [
        'w-avatar',
        borderless && 'borderless',
        className
    ].filter(Boolean).join(' ')
</script>

{#if Array.isArray(img)}
    <div class="w-avatar-group"
        class:reverse
        style={borderColor ? `--w-avatar-border: ${borderColor};` : null}
    >
        {#each img as img, index}
            <img
                src={img}
                alt={Array.isArray(alt) ? alt[index] : alt}
                width={Array.isArray(size) ? size[index] : size}
                height={Array.isArray(size) ? size[index] : size}
                loading={lazy ? 'lazy' : null}
                class={classes}
                style={Array.isArray(size) ? `--w-avatar-index: ${size[index]}` : null}
            />
        {/each}
    </div>
{:else}
    <img
        src={img}
        alt={Array.isArray(alt) ? alt[0] : alt}
        width={Array.isArray(size) ? size[0] : size}
        height={Array.isArray(size) ? size[0] : size}
        class={classes}
        loading={lazy ? 'lazy' : null}
        style={borderColor ? `--w-avatar-border: ${borderColor};` : null}
    />
{/if}
