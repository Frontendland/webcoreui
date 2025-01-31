import React from 'react'
import { Icon as IconComponent } from 'webcoreui/react'

import type { CustomIconProps } from './icon'
import iconSet from './iconSet'

const Icon = (props: CustomIconProps) => <IconComponent iconSet={iconSet} {...props} />

export default Icon
