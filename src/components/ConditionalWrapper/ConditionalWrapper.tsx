import React from 'react'
import type { ConditionalWrapperProps } from './conditionalwrapper'

type ReactConditionalWrapperProps = {
  wrapper: (_: React.ReactNode) => any
  children: React.ReactNode
} & ConditionalWrapperProps

const ConditionalWrapper = ({ condition, wrapper, children }: ReactConditionalWrapperProps) =>
  condition ? wrapper(children) : children

export default ConditionalWrapper
