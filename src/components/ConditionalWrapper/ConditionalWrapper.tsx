import type { ConditionalWrapperProps } from './conditionalwrapper'

export type ReactConditionalWrapperProps = {
    wrapper: (_: React.ReactNode) => any
    children: React.ReactNode
} & ConditionalWrapperProps

const ConditionalWrapper = ({ condition, wrapper, children }: ReactConditionalWrapperProps) =>
    condition ? wrapper(children) : children

export default ConditionalWrapper
