import { classNames } from '@utils/classNames'

import { describe, expect, it } from 'vitest'

describe('classNames', () => {
    it('should return a single class as a string', () => {
        expect(classNames(['class1'])).toBe('class1')
    })

    it('should concatenate multiple classes', () => {
        expect(classNames(['class1', 'class2', 'class3'])).toBe('class1 class2 class3')
    })

    it('should filter out falsy values', () => {
        expect(classNames(['class1', false, null, undefined, '', 'class2'])).toBe('class1 class2')
    })

    it('should flatten nested arrays', () => {
        expect(classNames(['class1', ['class2', ['class3', 'class4']]])).toBe('class1 class2 class3 class4')
    })

    it('should handle an empty array', () => {
        expect(classNames([])).toBe('')
    })

    it('should handle arrays with only falsy values', () => {
        expect(classNames([false, null, undefined, ''])).toBe('')
    })

    it('should handle deeply nested arrays with falsy values', () => {
        expect(classNames([['class1', [false, null]], 'class2', ['', ['class3']]])).toBe('class1 class2 class3')
    })
})
