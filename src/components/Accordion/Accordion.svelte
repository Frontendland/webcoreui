<script lang="ts">
    import type { AccordionProps } from './accordion'
    import ArrowDown from '../../icons/arrow-down.svg?raw'
    import './accordion.scss'

    export let items: AccordionProps['items']

    let state = Array(items.length).fill(false)

    const toggle = (index: number) => {
        state = state.map((_, i) => index === i
            ? !state[i]
            : state[i]
        )
    }
</script>

<ul class="w-accordion">
    {#each items as item, index}
        <li>
            <div
                class="accordion-title"
                class:open={state[index]}
                on:click={() => toggle(index)}
            >
                {item.title}
                {@html ArrowDown}
            </div>
            <div class="accordion-wrapper">
                <div class="accordion-content">
                    {@html item.content}
                </div>
            </div>
        </li>
    {/each}
</ul>
