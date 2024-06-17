import React from 'react'
import type { ConditionalWrapperProps } from './conditionalwrapper'

type ExtendedConditionalWrapperProps = {
  condition: ConditionalWrapperProps['condition']
  wrapper: (_: React.ReactNode) => any
  children: React.ReactNode
};

const ConditionalWrapper = ({ condition, wrapper, children }: ExtendedConditionalWrapperProps) =>
  condition ? wrapper(children) : children

export default ConditionalWrapper
