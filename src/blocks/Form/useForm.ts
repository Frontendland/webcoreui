import { get } from 'webcoreui'

export type FormActions = {
    validationRules: Record<string, boolean>
    isPreventDefault: boolean
    onErrorCallback: ((invalidFields: string[]) => void) | null
    preventDefault: () => FormActions
    getInput: (field: string) => HTMLInputElement | null
    getInputValue: (field: string) => string | null
    getInputValues: () => Record<string, string>
    update: (field: string, value: string | boolean) => FormActions
    setValidations: (validationRules: Record<string, boolean>) => FormActions
    isValidForm: () => boolean,
    onChange: (callback: (formValues: Record<string, string>) => void) => FormActions
    onSubmit: (callback: (formValues: Record<string, string>) => void) => FormActions
    onError: (callback: (invalidFields: string[]) => void) => FormActions
}

export const useForm = (selector: string): FormActions | null => {
    const form = get(selector) as HTMLFormElement

    if (!form) {
        return null
    }

    const missingNameFields = Array.from(form.elements).filter(element =>
        element instanceof HTMLInputElement
        || element instanceof HTMLSelectElement
        || element instanceof HTMLTextAreaElement
    ).filter(element => !element.name)

    if (missingNameFields.length) {
        // eslint-disable-next-line no-console
        console.error([
            'name attribute is missing for the following elements:\n\n',
            missingNameFields.map(el => el.outerHTML).join('\n\n'),
            '\n\nForm values will not be picked up.'
        ].join(' '))
    }

    return {
        validationRules: {},
        isPreventDefault: false,
        onErrorCallback: null,
        preventDefault() {
            this.isPreventDefault = true

            return this
        },
        getInput(field) {
            return form.querySelector(`[name=${field}]`)
        },
        getInputValue(field) {
            return String(new FormData(form).get(field))
        },
        getInputValues() {
            const formData = new FormData(form)
            const formValues: Record<string, string> = {}

            for (const [key, value] of formData.entries()) {
                formValues[key] = String(value)
            }

            return formValues
        },
        update(field, value) {
            const input = form.querySelector(`[name=${field}]`) as HTMLInputElement

            if (typeof value === 'boolean') {
                input.checked = value
            }

            if (typeof value === 'string') {
                input.value = value
            }

            return this
        },
        setValidations(validationRules) {
            this.validationRules = validationRules

            return this
        },
        isValidForm() {
            return Object.values(this.validationRules).every(key => key)
        },
        onChange(callback) {
            form.addEventListener('input', () => {
                callback?.(this.getInputValues())
            })

            return this
        },
        onSubmit(callback) {
            form.addEventListener('submit', event => {
                if (this.isPreventDefault) {
                    event.preventDefault()
                }

                if (this.isValidForm()) {
                    callback?.(this.getInputValues())
                }

                if (!this.isValidForm() && this.onErrorCallback) {
                    const invalidFields = Object
                        .keys(this.validationRules)
                        .filter(key => !this.validationRules[key])

                    this.onErrorCallback(invalidFields)
                }
            })

            return this
        },
        onError(callback) {
            this.onErrorCallback = callback

            return this
        }
    }
}
