/* eslint-disable max-lines */
import { useForm } from '@blocks/Form/useForm'
import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest'
import { get } from 'webcoreui'

vi.mock('webcoreui', () => {
    return {
        get: vi.fn()
    }
})

describe('useForm', () => {
    let form: HTMLFormElement
    let input: HTMLInputElement
    let checkbox: HTMLInputElement

    beforeEach(() => {
        vi.clearAllMocks()

        form = document.createElement('form')
        input = document.createElement('input')
        checkbox = document.createElement('input')

        input.type = 'text'
        input.name = 'username'
        input.value = 'john'

        checkbox.type = 'checkbox'
        checkbox.name = 'accept'
        checkbox.checked = false

        form.appendChild(input)
        form.appendChild(checkbox)

        ;(get as unknown as Mock).mockReturnValue(form)
    })

    it('should return null if form is not found', () => {
        (get as unknown as Mock).mockReturnValue(null)

        const result = useForm('#missing')

        expect(result).toBeNull()
    })

    it('should return null if selector is null', () => {
        const result = useForm(null)

        expect(result).toBeNull()
    })

    it('should accept an HTMLFormElement directly', () => {
        const result = useForm(form)

        expect(result).not.toBeNull()
    })

    it('should log error if input missing name', () => {
        const nameless = document.createElement('input')

        form.appendChild(nameless)

        const spy = vi.spyOn(console, 'error').mockImplementation(() => {})

        useForm('#form')

        expect(spy).toHaveBeenCalled()
    })

    it('should set preventDefault flag', () => {
        const form = useForm('#form')!

        expect(form.isPreventDefault).toBe(false)

        form.preventDefault()

        expect(form.isPreventDefault).toBe(true)
    })

    it('should get input by name', () => {
        const form = useForm('#form')!

        expect(form.getInput('username')).toBe(input)
    })

    it('should return null for getInput with unknown field', () => {
        const form = useForm('#form')!

        expect(form.getInput('nonexistent')).toBeNull()
    })

    it('should get input value', () => {
        const form = useForm('#form')!

        expect(form.getInputValue('username')).toBe('john')
    })

    it('should return null from getInputValue for missing field', () => {
        const form = useForm('#form')!

        expect(form.getInputValue('nonexistent')).toBeNull()
    })

    it('should get all input values', () => {
        const form = useForm('#form')!

        expect(form.getInputValues()).toEqual({ username: 'john' })
    })

    it('should update text input value', () => {
        const form = useForm('#form')!

        form.update('username', 'doe')

        expect(input.value).toBe('doe')
    })

    it('should update checkbox value', () => {
        const form = useForm('#form')!

        form.update('accept', true)

        expect(checkbox.checked).toBe(true)
    })

    it('should warn and not throw when updating a non-existent field', () => {
        const form = useForm('#form')!
        const spy = vi.spyOn(console, 'warn').mockImplementation(() => {})

        expect(() => form.update('nonexistent', 'value')).not.toThrow()
        expect(spy).toHaveBeenCalledWith(expect.stringContaining('nonexistent'))
    })

    it('should reset the form when reset is called', () => {
        const form = useForm('#form')!

        input.value = 'changed'
        form.reset()

        // HTMLFormElement.reset() restores default values;
        // jsdom resets to the value at parse time which is empty for dynamically created inputs
        expect(input.value).toBe('')
    })

    it('should clear all form fields when clear is called', () => {
        const form = useForm('#form')!

        input.value = 'something'
        checkbox.checked = true
        form.clear()

        expect(input.value).toBe('')
        expect(checkbox.checked).toBe(false)
    })

    it('should clear select elements on .clear', () => {
        const select = document.createElement('select')
        select.name = 'country'

        const option1 = document.createElement('option')
        option1.value = 'hu'

        const option2 = document.createElement('option')
        option2.value = 'us'

        select.appendChild(option1)
        select.appendChild(option2)
        select.selectedIndex = 1
        form.appendChild(select)

        const formActions = useForm('#form')!

        formActions.clear()

        expect(select.selectedIndex).toBe(0)
    })

    it('should clear textarea elements on .clear', () => {
        const textarea = document.createElement('textarea')
        textarea.name = 'bio'
        textarea.value = 'some text'
        form.appendChild(textarea)

        const formActions = useForm('#form')!

        formActions.clear()

        expect(textarea.value).toBe('')
    })

    describe('validate', () => {
        it('should accept a factory function and evaluate it immediately', () => {
            const formActions = useForm('#form')!

            formActions.validate(() => ({ username: true }))

            expect(formActions.validationRules).toEqual({ username: true })
        })

        it('should store the factory function', () => {
            const formActions = useForm('#form')!
            const factory = vi.fn(() => ({ username: true }))

            formActions.validate(factory)

            expect(formActions.validationFactory).toBe(factory)
        })

        it('should mark submit button as managed when not explicitly disabled', () => {
            const button = document.createElement('button')
            button.type = 'submit'
            form.appendChild(button)

            const formActions = useForm('#form')!

            formActions.validate(() => ({ username: true }))

            expect(button.hasAttribute('data-form-managed')).toBe(true)
        })

        it('should not mark submit button as managed if already disabled', () => {
            const button = document.createElement('button')
            button.type = 'submit'
            button.disabled = true
            form.appendChild(button)

            const formActions = useForm('#form')!

            formActions.validate(() => ({ username: true }))

            expect(button.hasAttribute('data-form-managed')).toBe(false)
        })

        it('should disable the submit button if validation fails on init', () => {
            const button = document.createElement('button')
            button.type = 'submit'
            form.appendChild(button)

            const formActions = useForm('#form')!

            formActions.validate(() => ({ username: false }))

            expect(button.disabled).toBe(true)
        })

        it('should enable the submit button if validation passes on init', () => {
            const button = document.createElement('button')
            button.type = 'submit'
            form.appendChild(button)

            const formActions = useForm('#form')!

            formActions.validate(() => ({ username: true }))

            expect(button.disabled).toBe(false)
        })
    })

    describe('isValid', () => {
        it('should return true when no validation factory is set', () => {
            const formActions = useForm('#form')!

            expect(formActions.isValid()).toBe(true)
        })

        it('should return false when validation rules have failing entries', () => {
            const formActions = useForm('#form')!

            formActions.validate(() => ({ username: false }))

            expect(formActions.isValid()).toBe(false)
        })

        it('should return true when all validation rules pass', () => {
            const formActions = useForm('#form')!

            formActions.validate(() => ({ username: true }))

            expect(formActions.isValid()).toBe(true)
        })

        it('should return false when validation rules object is empty', () => {
            const formActions = useForm('#form')!

            // Force factory to return empty object to verify the length guard
            formActions.validate(() => ({}))

            expect(formActions.isValid()).toBe(false)
        })
    })

    describe('onChange', () => {
        it('should call onChange callback when input changes', () => {
            const formActions = useForm('#form')!
            const cb = vi.fn()

            formActions.onChange(cb)
            input.value = 'new'
            input.dispatchEvent(new Event('input', { bubbles: true }))

            expect(cb).toHaveBeenCalledWith(expect.objectContaining({ username: 'new' }))
        })

        it('should work without a callback', () => {
            const formActions = useForm('#form')!

            formActions.onChange()

            expect(() => {
                input.dispatchEvent(new Event('input', { bubbles: true }))
            }).not.toThrow()
        })

        it('should re-evaluate the validation factory on input change', () => {
            const formActions = useForm('#form')!
            const factory = vi.fn(values => ({ username: values.username.length > 3 }))

            formActions.validate(factory).onChange()

            input.value = 'jo'
            input.dispatchEvent(new Event('input', { bubbles: true }))

            expect(factory).toHaveBeenCalledTimes(2) // once on validate, once on input
            expect(formActions.validationRules).toEqual({ username: false })
        })

        it('should update submit button state on input change', () => {
            const button = document.createElement('button')
            button.type = 'submit'
            form.appendChild(button)

            const formActions = useForm('#form')!

            formActions
                .validate(values => ({ username: values.username.length > 3 }))
                .onChange()

            input.value = 'jo'
            input.dispatchEvent(new Event('input', { bubbles: true }))
            expect(button.disabled).toBe(true)

            input.value = 'johndoe'
            input.dispatchEvent(new Event('input', { bubbles: true }))
            expect(button.disabled).toBe(false)
        })
    })

    describe('onSubmit', () => {
        it('should call onSubmit callback if form is valid', () => {
            const formActions = useForm('#form')!
            const cb = vi.fn()

            formActions.validate(() => ({ username: true })).onSubmit(cb)
            form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

            expect(cb).toHaveBeenCalledWith(expect.objectContaining({ username: 'john' }))
        })

        it('should not call onSubmit callback if form is invalid', () => {
            const formActions = useForm('#form')!
            const cb = vi.fn()

            formActions.validate(() => ({ username: false })).onSubmit(cb)
            form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

            expect(cb).not.toHaveBeenCalled()
        })

        it('should call onSubmit if no validations are set', () => {
            const formActions = useForm('#form')!
            const cb = vi.fn()

            formActions.onSubmit(cb)
            form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

            expect(cb).toHaveBeenCalled()
        })

        it('should prevent default on submit when preventDefault is set', () => {
            const formActions = useForm('#form')!
            const cb = vi.fn()

            formActions.validate(() => ({ username: true })).preventDefault().onSubmit(cb)

            const event = new Event('submit', { bubbles: true, cancelable: true })
            const preventSpy = vi.spyOn(event, 'preventDefault')

            form.dispatchEvent(event)

            expect(preventSpy).toHaveBeenCalled()
            expect(cb).toHaveBeenCalled()
        })

        it('should call onError when form is invalid on submit', () => {
            const formActions = useForm('#form')!
            const cb = vi.fn()

            formActions.validate(() => ({ username: false })).onError(cb).onSubmit(() => {})
            form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

            expect(cb).toHaveBeenCalledWith(['username'])
        })

        it('should not call onError when form is valid on submit', () => {
            const formActions = useForm('#form')!
            const errorCb = vi.fn()
            const submitCb = vi.fn()

            formActions
                .validate(() => ({ username: true }))
                .onError(errorCb)
                .onSubmit(submitCb)

            form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

            expect(errorCb).not.toHaveBeenCalled()
        })
    })

    describe('destroy', () => {
        it('should remove submit listener after destroy', () => {
            const formActions = useForm('#form')!
            const cb = vi.fn()

            formActions.validate(() => ({ username: true })).onSubmit(cb)
            formActions.destroy()
            form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

            expect(cb).not.toHaveBeenCalled()
        })

        it('should remove input listener after destroy', () => {
            const formActions = useForm('#form')!
            const cb = vi.fn()

            formActions.onChange(cb)
            formActions.destroy()
            input.dispatchEvent(new Event('input', { bubbles: true }))

            expect(cb).not.toHaveBeenCalled()
        })
    })
})
