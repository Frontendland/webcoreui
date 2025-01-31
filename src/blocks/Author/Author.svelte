<script lang="ts">
   import { classNames } from 'webcoreui'
    import { Avatar, Card } from 'webcoreui/svelte'

    import Socials from '@blocks/Socials/Socials.svelte'

    import type { AuthorProps } from './author'
    import styles from './author.module.scss'

    const {
        img,
        name,
        role,
        description,
        socials,
        bodyClassName,
        ...rest
    }: AuthorProps = $props()

    const classes = classNames([
        'flex sm column sm-row',
        bodyClassName
    ])
</script>

<Card bodyClassName={classes} {...rest}>
    <div class={styles.meta}>
        <Avatar img={img.src} {...img} />
        <div class="flex column xxs">
            <strong>{name}</strong>
            <span class="muted">{role}</span>
            {#if socials?.links?.length}
                <Socials {...socials} />
            {/if}
        </div>
    </div>
    <div class={styles.description}>
        {@html description}
    </div>
</Card>
