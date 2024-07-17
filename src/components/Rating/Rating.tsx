import React from 'react'
import type { RatingProps } from './rating'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import styles from './rating.module.scss'
import { classNames } from '../../utils/classNames'

const Rating = ({
    score,
    total = 5,
    showText,
    text = '{0} out of {1}',
    showEmpty = true,
    outline = true,
    reviewCount,
    reviewText = '{0} reviews',
    reviewLink,
    reviewTarget,
    color,
    emptyColor,
    size,
    className
}: RatingProps) => {
    const classes = classNames([
        styles.rating,
        outline && styles.outline,
        className
    ])

    const styleVariables = {
        ...(color && { '--w-rating-color': color }),
        ...(size && { '--w-rating-size': `${size}px` }),
        ...(emptyColor && { '--w-rating-empty-color': emptyColor })
    } as React.CSSProperties
 
    const translatedText = text
        .replace('{0}', `${score}`)
        .replace('{1}', `${total}`)

    const translatedReviewText = reviewText.replace('{0}', `${reviewCount}`)

    return (
        <span className={classes} style={styleVariables}>
            {score > 0 && (
                <span className={styles.score}>
                    {Array(score).fill('★').join('')}
                </span>
            )}
            {showEmpty && (
                <span className={styles.empty}>
                    {Array(total - score).fill('★').join('')}
                </span>
            )}
            {showText && (
                <span className={classNames([
                    styles.text,
                    reviewCount && styles.m
                ])}>
                    {translatedText}
                </span>
            )}
            {reviewCount && '•'}
            {reviewCount && (
                <ConditionalWrapper condition={!!reviewLink} wrapper={children => (
                    <a href={reviewLink} target={reviewTarget}>
                        {children}
                    </a>
                )}>
                    <span className={styles.text}>
                        {translatedReviewText}
                    </span>
                </ConditionalWrapper>
            )}
        </span>
    )
}

export default Rating
