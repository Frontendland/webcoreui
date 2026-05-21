<script lang="ts">
    import {
        Avatar,
        ConditionalWrapper,
        Rating
    } from 'webcoreui/svelte'

    import type { UserProps } from './user'

    export type Props = UserProps

    const {
        avatar,
        avatarSize = 50,
        name,
        role,
        roleTooltip,
        rating,
        ...rest
    }: Props = $props()
</script>

<ConditionalWrapper condition={!!rating}>
    <div class="flex sm items-center">
        <Avatar
            img={avatar}
            size={avatarSize}
        />
        <div class="flex column xs">
            <span>{name}</span>
            {#if role}
                <span class="muted" data-tooltip={roleTooltip}>
                    {role}
                </span>
            {/if}
        </div>
    </div>
    {#if rating}
        <hr />
        <Rating {...rest} score={rating} />
    {/if}
</ConditionalWrapper>
