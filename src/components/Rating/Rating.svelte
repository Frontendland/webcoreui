<script lang="ts">
    import type { RatingProps } from './rating'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './rating.module.scss'

    const {
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
    }: RatingProps = $props()

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
    {#if score}
        <span class={styles.score}>{Array(Math.round(score)).fill('★').join('')}</span>
    {/if}
    {#if showEmpty}
    <span class={styles.empty}>
            {Array((total || 5) - Math.round(score)).fill('★').join('')}
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
