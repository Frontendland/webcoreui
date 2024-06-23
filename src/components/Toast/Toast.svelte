<script lang="ts">
    import type { ToastProps } from './toast'
    import './toast.scss'

    export let className: ToastProps['className'] = ''

    const classes = [
        'w-toast',
        className
    ].filter(Boolean).join(' ')
</script>