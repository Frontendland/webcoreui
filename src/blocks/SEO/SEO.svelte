<script>
    import { classNames } from 'webcoreui'
    import {
        Card,
        Progress
    } from 'webcoreui/svelte'

    import styles from './seo.module.scss'

    const progressClass = classNames([
        'flex justify-between muted',
        styles['progress-label']
    ])
</script>

<Card title="SEO Overview">
    <span>Keep track of the SEO performance of your posts.</span>

    <div class={classNames(['flex column md', styles.my])}>
        <div>
            <div class={progressClass}>
                <span>Underperforming</span>
                <span>50%</span>
            </div>
            <Progress value={50} color="var(--w-color-alert)" />
        </div>
        <div>
            <div class={progressClass}>
                <span>OK</span>
                <span>30%</span>
            </div>
            <Progress value={30} color="var(--w-color-warning)" />
        </div>
        <div>
            <div class={progressClass}>
                <span>SEO-friendly</span>
                <span>20%</span>
            </div>
            <Progress value={20} color="var(--w-color-success)" />
        </div>
    </div>
</Card>
