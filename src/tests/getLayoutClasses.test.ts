import { getLayoutClasses } from '@utils/getLayoutClasses'

import { describe, expect, it } from 'vitest'

describe('getLayoutClasses', () => {
    it('should return the correct classes for gap', () => {
        expect(getLayoutClasses({ gap: 'none' })).toBe('none')
        expect(getLayoutClasses({ gap: 'xxs' })).toBe('xxs')
        expect(getLayoutClasses({ gap: 'xs' })).toBe('xs')
        expect(getLayoutClasses({ gap: 'sm' })).toBe('sm')
        expect(getLayoutClasses({ gap: 'md' })).toBe('md')
        expect(getLayoutClasses({ gap: 'default' })).toBe('default')
        expect(getLayoutClasses({ gap: 'lg' })).toBe('lg')
        expect(getLayoutClasses({ gap: 'xl' })).toBe('xl')
        expect(getLayoutClasses({ gap: 'xl2' })).toBe('xl2')
        expect(getLayoutClasses({ gap: 'xl3' })).toBe('xl3')
        expect(getLayoutClasses({ gap: 'xl4' })).toBe('xl4')
        expect(getLayoutClasses({ gap: 'xl5' })).toBe('xl5')

        expect(getLayoutClasses({ gap: {
            default: 'sm',
            xs: 'xl2',
            sm: 'xl3',
            md: 'xl4',
            lg: 'xl5'
        } })).toBe('sm xs-xl2 sm-xl3 md-xl4 lg-xl5')
    })

    it('should return the correct classes for alignment', () => {
        expect(getLayoutClasses({ alignment: { horizontal: 'center' } })).toBe('justify-center')
        expect(getLayoutClasses({ alignment: { horizontal: 'start' } })).toBe('justify-start')
        expect(getLayoutClasses({ alignment: { horizontal: 'end' } })).toBe('justify-end')
        expect(getLayoutClasses({ alignment: { horizontal: 'between' } })).toBe('justify-between')
        expect(getLayoutClasses({ alignment: { horizontal: 'around' } })).toBe('justify-around')
        expect(getLayoutClasses({ alignment: { horizontal: 'evenly' } })).toBe('justify-evenly')
        expect(getLayoutClasses({ alignment: { horizontal: 'stretch' } })).toBe('justify-stretch')

        expect(getLayoutClasses({ alignment: { vertical: 'center' } })).toBe('items-center')
        expect(getLayoutClasses({ alignment: { vertical: 'start' } })).toBe('items-start')
        expect(getLayoutClasses({ alignment: { vertical: 'end' } })).toBe('items-end')
        expect(getLayoutClasses({ alignment: { vertical: 'baseline' } })).toBe('items-baseline')
        expect(getLayoutClasses({ alignment: { vertical: 'stretch' } })).toBe('items-stretch')

        expect(getLayoutClasses({ alignment: {
            vertical: 'center',
            horizontal: 'center'
        } })).toBe('center')

        expect(getLayoutClasses({ alignment: {
            default: {
                horizontal: 'around',
                vertical: 'stretch'
            },
            xs: {
                horizontal: 'start',
                vertical: 'start'
            },
            sm: {
                horizontal: 'center',
                vertical: 'center'
            },
            md: {
                horizontal: 'end',
                vertical: 'end'
            },
            lg: {
                horizontal: 'between',
                vertical: 'baseline'
            }
        } })).toBe([
            'justify-around',
            'items-stretch',
            'xs-justify-start',
            'xs-items-start',
            'sm-center',
            'md-justify-end',
            'md-items-end',
            'lg-justify-between',
            'lg-items-baseline'
        ].join(' '))
    })

    it('should return the correct classes for direction', () => {
        expect(getLayoutClasses({ direction: 'row' })).toBe('row')
        expect(getLayoutClasses({ direction: 'column' })).toBe('column')
        expect(getLayoutClasses({ direction: 'row-reverse' })).toBe('row-reverse')
        expect(getLayoutClasses({ direction: 'column-reverse' })).toBe('column-reverse')

        expect(getLayoutClasses({ direction: {
            default: 'column',
            xs: 'row',
            sm: 'column',
            md: 'row-reverse',
            lg: 'column-reverse'
        } })).toBe('column xs-row sm-column md-row-reverse lg-column-reverse')
    })

    it('should return the correct classes for wrap', () => {
        expect(getLayoutClasses({ wrap: 'wrap' })).toBe('wrap')
        expect(getLayoutClasses({ wrap: 'nowrap' })).toBe('nowrap')
        expect(getLayoutClasses({ wrap: 'wrap-reverse' })).toBe('wrap-reverse')

        expect(getLayoutClasses({ wrap: {
            default: 'nowrap',
            xs: 'wrap',
            sm: 'nowrap',
            md: 'wrap-reverse',
            lg: 'wrap'
        } })).toBe('nowrap xs-wrap sm-nowrap md-wrap-reverse lg-wrap')
    })

    it('should return the correct combined classes', () => {
        expect(getLayoutClasses({
            gap: 'xs',
            alignment: {
                horizontal: 'center'
            },
            direction: 'row',
            wrap: 'nowrap'
        })).toBe('xs justify-center row nowrap')

        expect(getLayoutClasses({
            gap: {
                default: 'xs',
                xs: 'default',
                sm: 'lg'
            },
            alignment: {
                xs: {
                    horizontal: 'center',
                    vertical: 'center'
                },
                sm: {
                    horizontal: 'start',
                    vertical: 'end'
                }
            },
            direction: {
                xs: 'row',
                sm: 'column'
            },
            wrap: {
                default: 'wrap-reverse',
                xs: 'nowrap',
                sm: 'wrap'
            }
        })).toBe([
            'xs',
            'xs-default',
            'sm-lg',
            'xs-center',
            'sm-justify-start',
            'sm-items-end',
            'xs-row',
            'sm-column',
            'wrap-reverse',
            'xs-nowrap',
            'sm-wrap'
        ].join(' '))
    })
})
