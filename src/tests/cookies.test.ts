import { getCookie, removeCookie,setCookie } from '@utils/cookies'

import { beforeEach,describe, expect, it, vi } from 'vitest'

describe('cookies', () => {
    beforeEach(() => {
        vi.stubGlobal('document', {
            cookie: ''
        })
    })

    describe('setCookie', () => {
        it('should set a cookie with the correct name and value', () => {
            setCookie('testCookie', 'testValue', 7)
            expect(document.cookie).toContain('testCookie=testValue')
        })

        it('should not set an expiration date if days is 0', () => {
            setCookie('testCookie', 'testValue', 0)
            expect(document.cookie).not.toContain('expires')
        })
    })

    describe('getCookie', () => {
        it('should retrieve the value of a cookie by name', () => {
            document.cookie = 'testCookie=testValue'

            expect(getCookie('testCookie')).toBe('testValue')
        })

        it('should return null if the cookie does not exist', () => {
            document.cookie = 'otherCookie=otherValue'

            expect(getCookie('nonExistentCookie')).toBeNull()
        })
    })

    describe('removeCookie', () => {
        it('should remove the specified cookie by setting Max-Age=-1', () => {
            document.cookie = 'testCookie=testValue'

            removeCookie('testCookie')
            expect(document.cookie).toContain('testCookie=; Max-Age=-1')
        })
    })
})
