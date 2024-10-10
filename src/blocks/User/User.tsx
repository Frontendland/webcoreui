import React from 'react'
import type { UserProps } from './user'

import {
    Avatar,
    Rating
} from 'webcoreui/react'

const User = ({
    avatar,
    avatarSize = 50,
    name,
    role,
    roleTooltip,
    rating,
    ...rest
}: UserProps) => {

    return (
        <React.Fragment>
            <div className="flex sm items-center">
                <Avatar
                    img={avatar}
                    size={avatarSize}
                />
                <div className="flex column xs">
                    <span>{name}</span>
                    {role && (
                        <span className="muted" data-tooltip={roleTooltip}>
                            {role}
                        </span>
                    )}
                </div>
            </div>
            {rating && (
                <React.Fragment>
                    <hr />
                    <Rating {...rest} score={rating} />
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default User
