<script lang="ts">
    import type { RatingProps } from './rating'
    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'
    
    import styles from './rating.module.scss'
    import { classNames } from '../../utils/classNames'
    
    export let score: RatingProps['score']
    export let total: RatingProps['total'] = 5
    export let showText: RatingProps['showText'] = false
    export let text: RatingProps['text'] = '{0} out of {1}'
    export let showEmpty: RatingProps['showEmpty'] = true
    export let outline: RatingProps['outline'] = true
    export let reviewCount: RatingProps['reviewCount'] = 0
    export let reviewText: RatingProps['reviewText'] = '{0} reviews'
    export let reviewLink: RatingProps['reviewLink'] = ''
    export let reviewTarget: RatingProps['reviewTarget'] = ''
    export let color: RatingProps['color'] = ''
    export let emptyColor: RatingProps['emptyColor'] = ''
    export let size: RatingProps['size'] = 0
    export let className: RatingProps['className'] = ''
    
    const classes = classNames([
        styles.rating,
        outline && styles.outline,
        className
    ])
    
    const styleVariables = classNames([
        color && `--w-rating-color: ${color};`,
        size && `--w-rating-size: ${size}px;`,
        emptyColor && `--w-rating-empty-color: ${emptyColor};`
    ])
    
    const translatedText = text!
        .replace('{0}', `${score}`)
        .replace('{1}', `${total}`)
    
    const translatedReviewText = reviewText?.replace('{0}', `${reviewCount}`)
</script>


<span class={classes} style={styleVariables}>
    <span class={styles.score}>{Array(score).fill('★').join('')}</span>
    {#if showEmpty}
        <span class={classNames([
            styles.empty,
            total === 10 && styles['ten-star']
        ])}>
            {Array((total || 5) - score).fill('★').join('')}
        </span>
    {/if}

    {#if showText}
        <span class={classNames([styles.text, reviewCount && styles.m])}>
            {translatedText}
        </span>
    {/if}

    {#if reviewCount}
        {'•'}
        <ConditionalWrapper
            condition={!!reviewLink}
            element="a"
            href={reviewLink}
            target={reviewTarget}
        >
            <span class={styles.text}>{translatedReviewText}</span>
        </ConditionalWrapper>
    {/if}
</span>
