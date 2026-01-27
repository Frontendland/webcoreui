<script lang="ts">
    import Button from '@blocks/Button/Button.svelte'

    import type { ErrorPageProps } from './errorPage'
    import styles from './error-page.module.scss'

    const {
        type = 404,
        typeColor,
        title,
        subTitle,
        buttons,
        ...rest
    }: ErrorPageProps = $props()

    const typeStyle = typeColor
        ? `--w-type-color: ${typeColor};`
        : null
</script>

<section class={styles.error} {...rest}>
    <strong class={styles.type} style={typeStyle}>{type}</strong>
    <h1 class={styles.title}>{title}</h1>
    {#if subTitle}
        <h2 class={styles['sub-title']}>{subTitle}</h2>
    {/if}

    {#if buttons?.length}
        <div class="flex xs wrap justify-center">
            {#each buttons as button}
                <Button {...button} />
            {/each}
        </div>
    {/if}
</section>
