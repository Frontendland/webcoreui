import type { ConditionalWrapperProps } from './conditionalwrapper'

export type Props = ConditionalWrapperProps & {
    wrapper: (_: React.ReactNode) => any
    children: React.ReactNode
}

const ConditionalWrapper = ({ condition, wrapper, children }: Props) =>
    condition ? wrapper(children) : children

export default ConditionalWrapper
