import React from 'react'
import { toast } from 'webcoreui'
import {
    Card,
    Checkbox,
    Radio,
    Switch,
    Toast
} from 'webcoreui/react'

const radioItems = [
    { label: 'All messages', value: '1' },
    { label: 'Direct messages only', value: '2', selected: true },
    { label: 'No notifications', value: '3' }
]

const Settings = () => {
    const showToast = (e: React.MouseEvent<HTMLInputElement>) => {
        toast({
            element: '.marketing-toast',
            content: e.currentTarget.checked
                ? 'Marketing emails enabled'
                : 'Marketing emails disabled'
        })
    }

    return (
        <Card title="Settings">
            <div className="flex column">
                <Checkbox
                    label="Enable all notifications"
                    // eslint-disable-next-line max-len
                    subText="Enable or disable all of your notification with one click. Previous settings will be overwritten."
                />
                <Switch label="Security emails" toggled={true} />
                <Switch label="Marketing emails" onClick={showToast} />
                <hr />
                <strong className="slack">Slack notifications</strong>
                <Radio
                    items={radioItems}
                    name="radio-example"
                />
            </div>
            <Toast theme="success" className="marketing-toast">
                Marketing emails enabled
            </Toast>
        </Card>
    )
}

export default Settings
