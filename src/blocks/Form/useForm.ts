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
    useSmartFill: (options?: { patterns?: Record<string, RegExp>, inputs?: Record<string, string> }) => FormActions
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
        useSmartFill({ patterns, inputs } = {}) {
            const textPatterns = {
                email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gm,
                phone: /\b(?:\+?\d{1,3}[\s-]?)?(?:\(?\d{2,4}\)?[\s-]?)?\d{3,4}[\s-]?\d{3,4}\b/gm,
                postal: /^[0-9]{4,5}(?:-[0-9]{4})?$/gm,
                date: /\b\d{1,4}[-/.]\d{1,2}[-/.]\d{1,4}\b/gm,
                url: /\bhttps?:\/\/[^\s/$.?#].[^\s]*\b/gm,
                ...(patterns || {})
            }

            const fieldHints: Record<string, string[]> = {
                email: ['mail', 'email', 'eaddress'],
                phone: ['phone', 'mobile', 'tel', 'cell'],
                postal: ['zip', 'postal', 'postcode'],
                date: ['date', 'dob', 'birth', 'day'],
                url: ['url', 'website', 'link']
            }

            const typeMap = {
                email: 'email',
                url: 'url',
                date: 'date',
                tel: 'phone'
            } as const

            const parseText = (text: string) => {
                const extracted: Record<string, string> = {}

                for (const [key, regex] of Object.entries(textPatterns)) {
                    const match = text.trim().match(regex)

                    if (match) {
                        extracted[key] = match[0].trim()
                    }
                }

                return extracted
            }

            const inferFieldType = (name: string, type: string) => {
                const lowered = name.toLowerCase().replace(/[_\-\d]/g, '')

                for (const [key, mappedName] of Object.entries(inputs || {})) {
                    if (mappedName.toLowerCase() === name.toLowerCase()) {
                        return key
                    }
                }

                if (type in typeMap) {
                    return typeMap[type as keyof typeof typeMap]
                }

                for (const [key, hints] of Object.entries(fieldHints)) {
                    if (hints.some(hint => lowered.includes(hint))) {
                        return key
                    }
                }

                return null
            }

            form.addEventListener('paste', (event: ClipboardEvent) => {
                const target = event.target

                if (!(target instanceof HTMLInputElement)) {
                    return
                }

                const pastedText = event.clipboardData?.getData('text') || ''

                if (pastedText?.length < 5) {
                    return
                }

                const extracted = parseText(pastedText)

                if (!Object.keys(extracted).length) {
                    return
                }

                let autoFilled = false

                Array.from(form.elements).forEach(element => {
                    if (element instanceof HTMLInputElement
                        || element instanceof HTMLSelectElement
                        || element instanceof HTMLTextAreaElement
                    ) {
                        const inferred = inferFieldType(element.name, element.type)

                        if (inferred && extracted[inferred]) {
                            const inputEvent = new Event('input', { bubbles: true })

                            element.value = extracted[inferred]
                            element.dispatchEvent(inputEvent)

                            autoFilled = true
                        }
                    }
                })

                if (autoFilled) {
                    event.preventDefault()
                }
            })

            return this
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
