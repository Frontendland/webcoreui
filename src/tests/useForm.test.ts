
import { useForm } from '@blocks/Form/useForm'
import { beforeEach,describe, expect, it, type Mock, vi } from 'vitest'
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

    it('should get input and input value', () => {
        const form = useForm('#form')!

        expect(form.getInput('username')).toBe(input)
        expect(form.getInputValue('username')).toBe('john')
    })

    it('should get all input values', () => {
        const form = useForm('#form')!

        expect(form.getInputValues()).toEqual({ username: 'john' })
    })

    it('should update text and checkbox', () => {
        const form = useForm('#form')!

        form.update('username', 'doe')
        expect(input.value).toBe('doe')

        form.update('accept', true)
        expect(checkbox.checked).toBe(true)
    })

    it('should set validations and check form validity', () => {
        const form = useForm('#form')!

        form.setValidations({ username: true, accept: false })

        expect(form.validationRules).toEqual({ username: true, accept: false })
        expect(form.isValidForm()).toBe(false)

        form.setValidations({ username: true, accept: true })

        expect(form.isValidForm()).toBe(true)
    })

    it('should call onChange callback when input changes', () => {
        const form = useForm('#form')!
        const cb = vi.fn()

        form.onChange(cb)

        input.value = 'new'
        input.dispatchEvent(new Event('input', { bubbles: true }))

        expect(cb).toHaveBeenCalledWith(expect.objectContaining({ username: 'new' }))
    })

    it('should call onSubmit callback if form is valid', () => {
        const actions = useForm('#form')!
        const cb = vi.fn()

        actions.setValidations({ username: true })
        actions.onSubmit(cb)

        const event = new Event('submit', { bubbles: true, cancelable: true })

        form.dispatchEvent(event)

        expect(cb).toHaveBeenCalledWith(expect.objectContaining({ username: 'john' }))
    })

    it('should prevent default on submit when preventDefault is set', () => {
        const actions = useForm('#form')!
        const cb = vi.fn()

        actions.setValidations({ username: true }).preventDefault().onSubmit(cb)

        const event = new Event('submit', { bubbles: true, cancelable: true })
        const preventSpy = vi.spyOn(event, 'preventDefault')

        form.dispatchEvent(event)

        expect(preventSpy).toHaveBeenCalled()
        expect(cb).toHaveBeenCalled()
    })

    it('should call onError when form is invalid', () => {
        const actions = useForm('#form')!
        const cb = vi.fn()

        actions.setValidations({ username: false }).onError(cb).onSubmit(() => {})

        form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

        expect(cb).toHaveBeenCalledWith(['username'])
    })
})
