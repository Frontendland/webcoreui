<script lang="ts">
    import type { StepperProps } from './stepper'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './stepper.module.scss'

    export let items: StepperProps['items'] = []
    export let color: StepperProps['color'] = ''
    export let completedColor: StepperProps['completedColor'] = ''
    export let activeColor: StepperProps['activeColor'] = ''
    export let borderless: StepperProps['vertical'] = false
    export let vertical: StepperProps['vertical'] = false
    export let className: StepperProps['className'] = ''

    const classes = classNames([
        styles.stepper,
        borderless && styles.borderless,
        vertical && styles.vertical,
        className
    ])

    const styleVariables = [
        color && `--w-stepper-color-border: ${color}`,
        completedColor && `--w-stepper-color-complete: ${completedColor}`,
        activeColor && `--w-stepper-color-active: ${activeColor}`
    ].filter(Boolean).join(';')
</script>

<ol class={classes} style={styleVariables || null}>
    {#each items as item, index}
        <li class={classNames([
            index !== 0 && styles.connect,
            item.active && styles.active,
            item.completed && styles.completed
        ])}>
            <span class={styles.number}>
                {#if item.icon}
                    {@html item.icon}
                {:else}
                    {index + 1}
                {/if}
            </span>
            <ConditionalWrapper
                condition={!!(item.title && item.subTitle)}
                class={styles.container}
            >
                {#if item.title}
                    <span>{item.title}</span>
                {/if}
                {#if item.subTitle}
                    <span class={styles.muted}>{item.subTitle}</span>
                {/if}
            </ConditionalWrapper>
        </li>
    {/each}
</ol>
