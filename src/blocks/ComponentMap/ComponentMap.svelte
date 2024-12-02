<script lang="ts">
    import type { SvelteComponent } from 'svelte'
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

    export let element: ComponentMapProps['element'] = 'div'
    export let gap: ComponentMapProps['gap'] = 'default'
    export let components: ComponentMapProps['components'] = []

    const blockMap: Record<string, typeof SvelteComponent<any>> = {
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
            {@html component.data?.children}
        {:else if typeof map[component.type] === 'undefined'}
            <div>
                Component <code>{component.type}</code> not found at index {index}.
            </div>
        {:else}
            <svelte:component this={map[component.type]} {...component.data}>
                {#if map[component.data?.children?.type]}
                    <svelte:component
                        this={map[component.data?.children?.type]}
                        {...component.data?.children?.data}
                    />
                {/if}

                {#if typeof component.data?.children === 'string'}
                    {@html component.data?.children}
                {/if}
            </svelte:component>
        {/if}
    {/each}
</svelte:element>

