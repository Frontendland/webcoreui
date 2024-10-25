<script lang="ts">
    import type { StepperProps } from './stepper'

    import { classNames } from '../../utils/classNames'

    import styles from './stepper.module.scss'

    export let className: StepperProps['className'] = ''

    const classes = classNames([
        styles.stepper,
        className
    ])
</script>