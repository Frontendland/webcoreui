import React from 'react'
import { classNames } from 'webcoreui'
import { Avatar, Card } from 'webcoreui/react'

import Socials from '@blocks/Socials/Socials.tsx'

import type { TeamProps } from './team'
import user from './user.svg?raw'
import styles from './team.module.scss'

const Team = ({
    members,
    avatar,
    columns = 3,
    compact,
    secondary,
    className
}: TeamProps) => {
    const classes = classNames([
        'grid',
        columns > 1 && 'sm-2',
        columns > 2 && `md-${columns}`,
        className
    ])

    if (!members?.length) {
        return null
    }

    return (
        <section className={classes}>
            {members.map((member, index) => (
                <Card
                    compact={compact}
                    secondary={secondary}
                    bodyClassName={styles.member}
                    key={index}
                >
                    {member.img ? (
                        <Avatar
                            img={member.img}
                            alt={member.name}
                            size={60}
                            className={styles.avatar}
                            {...avatar}
                        />
                    ) : (
                        <span dangerouslySetInnerHTML={{ __html: user }} />
                    )}

                    <b>{member.name}</b>

                    {member.role && (
                        <span className="muted">{member.role}</span>
                    )}

                    {member.description && (
                        <div
                            dangerouslySetInnerHTML={{ __html: member.description }}
                            className={styles.description}
                        />
                    )}

                    {member.socials?.length && (
                        <Socials
                            links={member.socials}
                            className={styles.socials}
                            color="var(--w-color-primary-20)"
                        />
                    )}
                </Card>
            ))}
        </section>
    )
}

export default Team
