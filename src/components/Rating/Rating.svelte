<script lang="ts">
    import type { RatingProps } from './rating'
    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'
    
    import './rating.scss'
    
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
    
    const classes = [
        'w-rating',
        outline && 'outline',
        className
    ].filter(Boolean).join(' ')
    
    const styles = [
        color && `--w-rating-color: ${color};`,
        size && `--w-rating-size: ${size}px;`,
        emptyColor && `--w-rating-empty-color: ${emptyColor};`
    ].filter(Boolean).join(' ')
    
    const translatedText = text!
        .replace('{0}', `${score}`)
        .replace('{1}', `${total}`)
    
    const translatedReviewText = reviewText?.replace('{0}', `${reviewCount}`)
</script>


<span class={classes} style={styles || null}>
    <span class="score">{Array(score).fill('★').join('')}</span>
    {#if showEmpty}
        <span
            class="empty"
            class:ten-star={total === 10}
        >
            {Array((total || 5) - score).fill('★').join('')}
        </span>
    {/if}

    {#if showText}
        <span class="text" class:m={reviewCount}>
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
            <span class="text">{translatedReviewText}</span>
        </ConditionalWrapper>
    {/if}
</span>
