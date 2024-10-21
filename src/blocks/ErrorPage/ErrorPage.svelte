<script lang="ts">
    import type { ErrorPageProps } from './errorPage'

    import styles from './error-page.module.scss'

    import { Button } from 'webcoreui/svelte'

    export let type: ErrorPageProps['type'] = 404
    export let typeColor: ErrorPageProps['typeColor'] = ''
    export let title: ErrorPageProps['title'] = ''
    export let subTitle: ErrorPageProps['subTitle'] = ''
    export let buttons: ErrorPageProps['buttons'] = []

    const typeStyle = typeColor
        ? `--w-type-color: ${typeColor};`
        : null
</script>

<section class={styles.error} {...$$restProps}>
    <strong class={styles.type} style={typeStyle}>{type}</strong>
    <h1 class={styles.title}>{title}</h1>
    {#if subTitle}
        <h2 class={styles['sub-title']}>{subTitle}</h2>
    {/if}

    {#if buttons?.length}
        <div class="flex xs wrap justify-center">
            {#each buttons as button}
                <Button {...button}>
                    {#if button.icon}
                        {@html button.icon}
                    {/if}
                    {button.text}
                </Button>
            {/each}
        </div>
    {/if}
</section>
