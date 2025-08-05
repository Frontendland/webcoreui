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

    import type { FormField, FormProps } from './form'

    const {
        fields,
        gap,
        className,
        ...rest
    }: FormProps = $props()

    const classes = classNames([
        'flex column',
        gap || 'md',
        className
    ])
</script>

{#snippet input(field: FormField)}
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
    {:else if field.type !== 'group'}
        <Input {...field} />
    {/if}
{/snippet}

<form class={classes} {...rest}>
    {#each fields as field}
        {#if field.type === 'group'}
            <div class={classNames(['grid', gap || 'md', `col-${field.fields.length}`])}>
                {#each field.fields as subField}
                    {@render input(subField)}
                {/each}
            </div>
        {:else}
            {@render input(field)}
        {/if}
    {/each}
</form>
