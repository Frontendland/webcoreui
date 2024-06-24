import React from 'react'
import type { ReactConditionalWrapperProps } from './conditionalwrapper'

const ConditionalWrapper = ({ condition, wrapper, children }: ReactConditionalWrapperProps) =>
  condition ? wrapper(children) : children

export default ConditionalWrapper
