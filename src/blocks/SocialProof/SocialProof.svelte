<script lang="ts">
    import type { SocialProofProps } from './socialProof'

    import styles from './social-proof.module.scss'

    import { classNames } from 'webcoreui'

    export let items: SocialProofProps['items'] = []
    export let className: SocialProofProps['className'] = ''
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
