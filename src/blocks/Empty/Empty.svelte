<script lang="ts">
    import { classNames } from 'webcoreui'

    import Button from '@blocks/Button/Button.svelte'

    import type { EmptyProps } from './empty'
    import styles from './empty.module.scss'

    const {
        icon,
        iconWithBackground,
        title,
        text,
        buttons,
        className
    }: EmptyProps = $props()

    const classes = classNames([
        'flex column center xs',
        iconWithBackground && styles['icon-bg'],
        styles.empty,
        className
    ])
</script>

<section class={classes}>
    {#if icon}
        {@html icon}
    {/if}

    <b class={styles.title}>{title}</b>

    <div class={classNames([styles.text, 'muted'])}>
        {@html text}
    </div>

    {#if buttons?.length}
        <div class="flex xs wrap justify-center">
            {#each buttons as button}
                <Button {...button} />
            {/each}
        </div>
    {/if}
</section>
