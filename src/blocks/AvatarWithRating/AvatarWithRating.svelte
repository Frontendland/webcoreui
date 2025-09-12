<script lang="ts">
    import { classNames } from 'webcoreui'
    import { Avatar, Rating } from 'webcoreui/svelte'

    import type { AvatarWithRatingProps } from './avatarWithRating'
    import styles from './avatar-with-rating.module.scss'

    const {
        avatar,
        rating,
        text,
        reverse,
        className
    }: AvatarWithRatingProps = $props()

    const classes = classNames([
        'flex sm items-center',
        styles.avatar,
        className
    ])
</script>

<div class={classes}>
    <Avatar {...avatar} />
    <div class={classNames(['flex xxs', reverse ? 'column-reverse' : 'column'])}>
        <Rating {...rating} className={styles.rating} />
        {#if text}
            <span class="muted">
                {@html text}
            </span>
        {/if}
    </div>
</div>
