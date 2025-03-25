<script lang="ts">
    import { classNames } from 'webcoreui'
    import { Avatar, Card } from 'webcoreui/svelte'

    import Socials from '@blocks/Socials/Socials.svelte'

    import type { TeamProps } from './team'
    import user from './user.svg?raw'
    import styles from './team.module.scss'

    const {
        members,
        avatar,
        columns = 3,
        compact,
        secondary,
        className
    }: TeamProps = $props()

    const classes = classNames([
        'grid',
        columns > 1 && 'sm-2',
        columns > 2 && `md-${columns}`,
        className
    ])
</script>

{#if members?.length}
    <section class={classes}>
        {#each members as member}
            <Card
                compact={compact}
                secondary={secondary}
                bodyClassName={styles.member}
            >
                {#if member.img}
                    <Avatar
                        img={member.img}
                        alt={member.name}
                        size={60}
                        className={styles.avatar}
                        {...avatar}
                    />
                {:else}
                    {@html user}
                {/if}

                <b>{member.name}</b>

                {#if member.role}
                    <span class="muted">{member.role}</span>
                {/if}

                {#if member.description}
                    <div class={styles.description}>{@html member.description}</div>
                {/if}

                {#if member.socials?.length}
                    <Socials
                        links={member.socials}
                        className={styles.socials}
                        color="var(--w-color-primary-20)"
                    />
                {/if}
            </Card>
        {/each}
    </section>
{/if}
