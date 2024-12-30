<script lang="ts">
    import type { Component, SvelteComponent } from 'svelte'
    import { classNames } from 'webcoreui'
    import {
        Accordion,
        Alert,
        AspectRatio,
        Avatar,
        Badge,
        Banner,
        Breadcrumb,
        Button,
        Card,
        Carousel,
        Checkbox,
        Collapsible,
        ConditionalWrapper,
        DataTable,
        Footer,
        Group,
        Icon,
        Input,
        Kbd,
        List,
        Masonry,
        Menu,
        Modal,
        Pagination,
        Popover,
        Progress,
        Radio,
        Rating,
        Ribbon,
        Select,
        Sheet,
        Sidebar,
        Skeleton,
        Slider,
        Spinner,
        Spoiler,
        Stepper,
        Switch,
        Table,
        Textarea,
        Timeline,
        TimelineItem,
        Toast
    } from 'webcoreui/svelte'

    import type { ComponentMapProps } from './componentMap'

    import {
        BlogCard,
        ErrorPage,
        FAQ,
        GridWithIcons,
        Hero,
        IconList,
        SettingCard,
        SignUp,
        SocialProof,
        Tiles,
        User
    } from '@blocks/svelte'

    const {
        element = 'div',
        gap = 'default',
        components = []
    }: ComponentMapProps = $props()

    const blockMap: Record<string, Component<any>> = {
        BlogCard,
        ErrorPage,
        FAQ,
        GridWithIcons,
        Hero,
        IconList,
        SettingCard,
        SignUp,
        SocialProof,
        Tiles,
        User
    }

    const map: Record<string, typeof SvelteComponent<any>> = {
        Accordion,
        Alert,
        AspectRatio,
        Avatar,
        Badge,
        Banner,
        Breadcrumb,
        Button,
        Card,
        Carousel,
        Checkbox,
        Collapsible,
        ConditionalWrapper,
        DataTable,
        Footer,
        Group,
        Icon,
        Input,
        Kbd,
        List,
        Masonry,
        Menu,
        Modal,
        Pagination,
        Popover,
        Progress,
        Radio,
        Rating,
        Ribbon,
        Select,
        Sheet,
        Sidebar,
        Skeleton,
        Slider,
        Spinner,
        Spoiler,
        Stepper,
        Switch,
        Table,
        Textarea,
        Timeline,
        TimelineItem,
        Toast,
        ...blockMap
    }
</script>

<svelte:element this={element} class={classNames(['flex column', gap])}>
    {#each components as component, index}
        {#if component.type === 'HTML'}
            {@html component.props?.children}
        {:else if typeof map[component.type] === 'undefined'}
            <div>
                Component <code>{component.type}</code> not found at index {index}.
            </div>
        {:else}
            {@const SvelteComponent = map[component.type]}
            <SvelteComponent {...component.props}>
                {#if map[component.props?.children?.type]}
                    {@const ChildComponent = map[component.props?.children?.type]}
                    <ChildComponent {...component.props?.children?.props} />
                {/if}

                {#if typeof component.props?.children === 'string'}
                    {@html component.props?.children}
                {/if}
            </SvelteComponent>
        {/if}
    {/each}
</svelte:element>

