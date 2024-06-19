import React from 'react'
import type { RatingProps } from './rating'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'
import './rating.scss'

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
    const classes = [
        'w-rating',
        outline && 'outline',
        className
    ].filter(Boolean).join(' ')

    const styles = {
        ...(color && { '--w-rating-color': color }),
        ...(size && { '--w-rating-size': `${size}px` }),
        ...(emptyColor && { '--w-rating-empty-color': emptyColor })
    } as React.CSSProperties
 
    const translatedText = text
        .replace('{0}', `${score}`)
        .replace('{1}', `${total}`)

    const translatedReviewText = reviewText.replace('{0}', `${reviewCount}`)

    return (
        <span className={classes} style={styles}>
            <span className="score">{Array(score).fill('★').join('')}</span>
            {showEmpty && (
                <span className={total === 10 ? 'empty ten-star' : 'empty'}>
                    {Array(total - score).fill('★').join('')}
                </span>
            )}
            {showText && (
                <span className={reviewCount ? 'text m' : 'text'}>
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
                    <span className="text">{translatedReviewText}</span>
                </ConditionalWrapper>
            )}
        </span>
    )
}

export default Rating
