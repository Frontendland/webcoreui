import type { Snippet } from 'svelte'

export type TimelineProps = {
    theme?: 'fill' | 'stroke' | 'stroke fill'
    alternate?: boolean
    centered?: boolean
    color?: string
    textColor?: string
    className?: string
    counter?: 'arabic-indic'
    | 'armenian'
    | 'bengali'
    | 'cambodian'
    | 'circle'
    | 'cjk-decimal'
    | 'cjk-earthly-branch'
    | 'cjk-heavenly-stem'
    | 'decimal-leading-zero'
    | 'devanagari'
    | 'disc'
    | 'disclosure-closed'
    | 'disclosure-open'
    | 'ethiopic-numeric'
    | 'georgian'
    | 'gujarati'
    | 'gurmukhi'
    | 'hebrew'
    | 'hiragana'
    | 'hiragana-iroha'
    | 'japanese-formal'
    | 'kannada'
    | 'katakana'
    | 'katakana-iroha'
    | 'khmer'
    | 'korean-hangul-formal'
    | 'korean-hanja-formal'
    | 'lao'
    | 'lower-alpha'
    | 'lower-alpha'
    | 'lower-armenian'
    | 'lower-greek'
    | 'lower-roman'
    | 'malayalam'
    | 'mongolian'
    | 'myanmar'
    | 'oriya'
    | 'persian'
    | 'simp-chinese-formal'
    | 'square'
    | 'tamil'
    | 'telugu'
    | 'thai'
    | 'tibetan'
    | 'trad-chinese-formal'
    | 'upper-alpha'
    | 'upper-armenian'
    | 'upper-roman'
}

export type SvelteTimelineProps = {
    children: Snippet
} & TimelineProps

export type ReactTimelineProps = {
    children: React.ReactNode
} & TimelineProps
