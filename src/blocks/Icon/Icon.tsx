import React from 'react'

import IconComponent from '@components/Icon/Icon.tsx'

import type { CustomIconProps } from './icon'
import iconSet from './iconSet'

const Icon = (props: CustomIconProps) => <IconComponent iconSet={iconSet} {...props} />

export default Icon
