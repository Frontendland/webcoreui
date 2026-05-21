<script lang="ts">
    import { classNames } from 'webcoreui'

    import type { SocialProofProps } from './socialProof'
    import styles from './social-proof.module.scss'

    export type Props = SocialProofProps

    const {
        items,
        className
    }: Props = $props()
</script>

<section class={classNames(['flex center wrap', className])}>
    {#each items as item}
        <div class={styles.proof}>
            <strong>{@html item.text}</strong>
            {#if item.subText}
                <span class="muted">{@html item.subText}</span>
            {/if}
        </div>
    {/each}
</section>
