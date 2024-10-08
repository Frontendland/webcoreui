import React from 'react'

import styles from './profile.module.scss'

import {
    Avatar,
    Badge,
    Card,
    Table,
    Tabs
} from 'webcoreui/react'

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

const Profile = () => {

    return (
        <Card>
            <Tabs items={tabItems} theme="boxed" even={true}>
                <div data-tab="profile" data-active="true">
                    <div className="flex sm items-center">
                        <Avatar
                            img="/img/avatar2.png"
                            size={50}
                        />
                        <div className="flex column xs">
                            <span>Emily</span>
                            <span className="muted">QA Engineer</span>
                        </div>
                    </div>

                    <strong className={styles.tasks}>Tasks</strong>
                    <hr />
                    <div className="flex column xs">
                        {tasks.map((task, index) => (
                            <div key={index} className="flex xs items-center">
                                <Badge theme={task.theme as any}>
                                    {task.label}
                                </Badge>
                                <a href="#" className={['muted', styles.task].join(' ')}>
                                    {task.ticket}
                                </a>
                            </div>
                        ))}
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
    )
}

export default Profile
