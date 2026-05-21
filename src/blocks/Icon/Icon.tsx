import { Icon as IconComponent } from 'webcoreui/react'

import type { CustomIconProps } from './icon'
import iconSet from './iconSet'

export type Props = CustomIconProps

const Icon = (props: Props) => <IconComponent iconSet={iconSet} {...props} />

export default Icon
