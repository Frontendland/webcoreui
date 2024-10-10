<script lang="ts">
    import type { UserProps } from './user'

    import {
        Avatar,
        Rating
    } from 'webcoreui/svelte'

    export let avatar: UserProps['avatar'] = ''
    export let avatarSize: UserProps['avatarSize'] = 50
    export let name: UserProps['name'] = ''
    export let role: UserProps['role'] = ''
    export let roleTooltip: UserProps['roleTooltip'] = null
    export let rating: UserProps['rating'] = 0
</script>

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
    <Rating {...$$restProps} score={rating} />
{/if}
