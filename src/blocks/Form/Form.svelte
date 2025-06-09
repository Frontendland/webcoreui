<script lang="ts">
    import { classNames } from 'webcoreui'
    import {
        Button,
        Checkbox,
        Input,
        Radio,
        Select,
        Slider,
        Switch,
        Textarea
    } from 'webcoreui/svelte'

    import type { FormProps } from './form'

    const {
        fields,
        gap,
        className,
        ...rest
    }: FormProps = $props()

    const classes = classNames([
        'grid',
        gap || 'md',
        className
    ])
</script>

<form class={classes} {...rest}>
    {#each fields as field}
        {#if field.type === 'button'}
            <Button {...(({ label, type, ...rest }) => rest)(field)} type="submit">
                {field.label}
            </Button>
        {:else if field.type === 'checkbox'}
            <Checkbox {...field} />
        {:else if field.type === 'radio'}
            <Radio {...field} />
        {:else if field.type === 'select'}
            <Select {...field} />
        {:else if field.type === 'slider'}
            <Slider {...field} />
        {:else if field.type === 'switch'}
            <Switch {...field} />
        {:else if field.type === 'textarea'}
            <Textarea {...field} />
        {:else}
            <Input {...field} />
        {/if}
    {/each}
</form>
