export type OTPInputProps<T extends object = object> = {
    name?: string
    length?: number
    groupLength?: number
    separator?: string
    label?: string
    subText?: string
    className?: string
} & T
