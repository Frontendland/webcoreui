<script lang="ts">
    import type { ListEventType,SvelteListProps } from './list'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'
    import Input from '../Input/Input.svelte'

    import { classNames } from '../../utils/classNames'

    import searchIcon from '../../icons/search.svg?raw'

    import styles from './list.module.scss'

    let {
        showSearchBar,
        showSearchBarIcon,
        searchBarPlaceholder,
        noResultsLabel = 'No results.',
        maxHeight,
        id,
        className,
        wrapperClassName,
        secondary,
        itemGroups = $bindable([]),
        onSelect
    }: SvelteListProps = $props()

    let searchValue = $state('')
    let numberOfResults = $state(1)

    const classes = classNames([
        styles.list,
        (secondary && !showSearchBar) && styles.secondary,
        !showSearchBar && styles.container,
        className
    ])

    const wrapperClasses = classNames([
        styles.container,
        secondary && styles.secondary,
        wrapperClassName
    ])

    const search = (event: InputEvent) => {
        searchValue = (event.target as HTMLInputElement).value.toLowerCase()

        numberOfResults = itemGroups
            .map(group => group.items)
            .flat()
            .filter(item => {
                return item.value?.toLowerCase().includes(searchValue)
                    || item.subText?.toLowerCase().includes(searchValue)
                    || item.name.toLowerCase().includes(searchValue)
            }).length
    }

    const select = (event: MouseEvent | KeyboardEvent) => {
        const li = event.target as HTMLLIElement

        itemGroups = itemGroups.map(group => {
            group.items = group.items.map(item => {
                item.selected = li.dataset.name === item.name

                return item
            })

            return group
        })

        onSelect?.({
            ...li.dataset,
            list: li.parentElement
        } as ListEventType)
    }

    const selectByKey = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            select(event)
        }
    }
</script>

<ConditionalWrapper
    condition={!!showSearchBar}
    class={wrapperClasses}
>
    {#if showSearchBar}
        {#if showSearchBarIcon}
            <Input type="search" placeholder={searchBarPlaceholder} onInput={search}>
                {#if showSearchBarIcon}
                    {@html searchIcon}
                {/if}
            </Input>
        {:else}
            <Input type="search" placeholder={searchBarPlaceholder} onInput={search} />
        {/if}
    {/if}
    <ul
        class={classes}
        id={id}
        style={maxHeight ? `max-height: ${maxHeight}` : null}
    >
        {#each itemGroups as group}
            {#if group.title}
                <li class={styles.title}
                    data-hidden={searchValue ? true : null}
                >
                    {group.title}
                </li>
            {/if}
            {#each group.items as item}
                <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                <li
                    tabIndex={item.href || item.disabled ? undefined : 0}
                    data-value={item.value}
                    data-name={item.name}
                    data-disabled={item.disabled}
                    data-selected={item.selected ? true : undefined}
                    data-hidden={(
                        !item.value?.toLowerCase().includes(searchValue)
                        && !item.subText?.toLowerCase().includes(searchValue)
                        && !item.name.toLowerCase().includes(searchValue)
                    ) ? true : null}
                    onclick={item.disabled ? null : select}
                    onkeyup={item.disabled ? null : selectByKey}
                >
                    <ConditionalWrapper
                        condition={!!item.href}
                        element="a"
                        href={item.href}
                        target={item.target}
                    >
                        <ConditionalWrapper
                            condition={!!(item.icon && item.subText)}
                        >
                            {#if item.icon}
                                {@html item.icon}
                            {/if}
                            <div>{item.name}</div>
                        </ConditionalWrapper>
                        {#if item.subText}
                            <span>{item.subText}</span>
                        {/if}
                    </ConditionalWrapper>
                </li>
            {/each}
        {/each}

        {#if showSearchBar && !numberOfResults}
            <li data-id="w-no-results">{noResultsLabel}</li>
        {/if}
    </ul>
</ConditionalWrapper>
