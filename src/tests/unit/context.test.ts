import { closeContext } from '@utils/context'

import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('closeContext', () => {
    let parent: HTMLElement
    let child: HTMLElement

    beforeEach(() => {
        document.body.innerHTML = ''

        parent = document.createElement('div')
        child = document.createElement('div')
        parent.appendChild(child)

        document.body.appendChild(parent)
        vi.useFakeTimers()
    })

    it('should close context when given HTMLElement', () => {
        closeContext(child)

        expect(parent.dataset.show).toBe('false')

        vi.advanceTimersByTime(200)

        expect(parent.style.top).toBe('')
        expect(parent.style.left).toBe('')
    })

    it('should close context when given a selector string', () => {
        child.id = 'target'
        closeContext('#target')

        expect(parent.dataset.show).toBe('false')

        vi.advanceTimersByTime(200)

        expect(parent.style.top).toBe('')
        expect(parent.style.left).toBe('')
    })

    it('should log an error if parent is missing', () => {
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

        parent.removeChild(child)

        closeContext(child)

        expect(consoleSpy).toHaveBeenCalledWith('Could not found context for:', child)
        consoleSpy.mockRestore()
    })

    it('should not throw if querySelector finds nothing', () => {
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

        closeContext('#non-existent')

        expect(consoleSpy).toHaveBeenCalled()

        consoleSpy.mockRestore()
    })
})
