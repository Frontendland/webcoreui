<script>
    import { toast } from 'webcoreui'
    import {
        Card,
        Checkbox,
        Radio,
        Switch,
        Toast
    } from 'webcoreui/svelte'

    const radioItems = [
        { label: 'All messages', value: '1' },
        { label: 'Direct messages only', value: '2', selected: true },
        { label: 'No notifications', value: '3' }
    ]

    const showToast = e => {
        toast({
            element: '.marketing-toast',
            content: e.target.checked
                ? 'Marketing emails enabled'
                : 'Marketing emails disabled'
        })
    }
</script>

<Card title="Settings">
    <div class="flex column">
        <Checkbox
            label="Enable all notifications"
            subText="Enable or disable all of your notification with one click. Previous settings will be overwritten."
        />
        <Switch label="Security emails" toggled={true} />
        <Switch label="Marketing emails" onClick={showToast} />
        <hr />
        <strong class="slack">Slack notifications</strong>
        <Radio
            items={radioItems}
            name="radio-example"
        />
    </div>
</Card>

<Toast theme="success" className="marketing-toast">
    Marketing emails enabled
</Toast>
