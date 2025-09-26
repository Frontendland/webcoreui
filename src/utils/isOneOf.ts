export const isOneOf = <T extends string>(values: readonly T[]) => {
    return (value: string): value is T => {
        return (values as readonly string[]).includes(value)
    }
}
