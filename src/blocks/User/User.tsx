import React from 'react'
import {
    Avatar,
    ConditionalWrapper,
    Rating
} from 'webcoreui/react'

import type { UserProps } from './user'

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
        <ConditionalWrapper
            condition={!!rating}
            wrapper={children => <div>{children}</div>}
        >
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
        </ConditionalWrapper>
    )
}

export default User
