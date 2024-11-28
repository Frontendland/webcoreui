export const classNames = (classes: any[]) => classes
    .flat(Infinity)
    .filter(Boolean)
    .join(' ')
