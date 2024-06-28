export const classNames = (classes: any[]) => classes
    .filter(Boolean)
    .flat(Infinity)
    .join(' ')
