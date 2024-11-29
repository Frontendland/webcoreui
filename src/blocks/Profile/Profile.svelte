<script>
    import {
        Avatar,
        Badge,
        Card,
        Table,
        Tabs
    } from 'webcoreui/svelte'

    import styles from './profile.module.scss'

    const tabItems = [{
        label: 'Profile',
        value: 'profile',
        active: true
    }, {
        label: 'Contact',
        value: 'contact'
    }]

    const tasks = [
        { theme: null, label: 'IP', ticket: 'W4567 - Home redesign' },
        { theme: 'alert', label: 'P1', ticket: 'W2345 - Payment gateway warnings' },
        { theme: 'warning', label: 'P3', ticket: 'W6789 - Investigate user auth issues' },
        { theme: 'info', label: 'TODO', ticket: 'W1357 - Mobile redesign' }
    ]
</script>

<Card>
    <Tabs items={tabItems} theme="boxed" even={true}>
        <div data-tab="profile" data-active="true">
            <div class="flex sm items-center">
                <Avatar
                    img="/img/avatar2.png"
                    size={50}
                />
                <div class="flex column xs">
                    <span>Emily</span>
                    <span class="muted">QA Engineer</span>
                </div>
            </div>

            <strong class={styles.tasks}>Tasks</strong>
            <hr />
            <div class="flex column xs">
                {#each tasks as task}
                    <div>
                        <Badge theme={task.theme}>
                            {task.label}
                        </Badge>

                        <a href="#link" class={['muted', styles.task].join(' ')}>
                            {task.ticket}
                        </a>
                    </div>
                {/each}
            </div>
        </div>
        <div data-tab="contact">
            <Table
                data={[
                    ['Phone', '+1 234 5678'],
                    ['Email', '<a href="#">emily@example.com</a>'],
                    ['Slack', '@emily09'],
                    ['Address', 'Mars, Pennsylvania']
                ]}
            />
        </div>
    </Tabs>
</Card>
