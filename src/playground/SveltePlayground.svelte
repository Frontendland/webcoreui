<script lang="ts">
    import Accordion from '@components/Accordion/Accordion.svelte'
    import Badge from '@components/Badge/Badge.svelte'
    import Banner from '@components/Banner/Banner.svelte'
    import Button from '@components/Button/Button.svelte'
    import Card from '@components/Card/Card.svelte'
    import Carousel from '@components/Carousel/Carousel.svelte'
    import Checkbox from '@components/Checkbox/Checkbox.svelte'
    import Collapsible from '@components/Collapsible/Collapsible.svelte'
    import Copy from '@components/Copy/Copy.svelte'
    import DataTable from '@components/DataTable/DataTable.svelte'
    import Icon from '@components/Icon/Icon.svelte'
    import Input from '@components/Input/Input.svelte'
    import List from '@components/List/List.svelte'
    import OTPInput from '@components/OTPInput/OTPInput.svelte'
    import Pagination from '@components/Pagination/Pagination.svelte'
    import Progress from '@components/Progress/Progress.svelte'
    import Radio from '@components/Radio/Radio.svelte'
    import Select from '@components/Select/Select.svelte'
    import Slider from '@components/Slider/Slider.svelte'
    import SpeedDial from '@components/SpeedDial/SpeedDial.svelte'
    import Spoiler from '@components/Spoiler/Spoiler.svelte'
    import Switch from '@components/Switch/Switch.svelte'
    import Tabs from '@components/Tabs/Tabs.svelte'
    import Textarea from '@components/Textarea/Textarea.svelte'
    import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher.svelte'
    import Toast from '@components/Toast/Toast.svelte'
    import Box from '@static/Box.svelte'

    import { toast } from '@utils/toast'

    import styles from './playground.module.scss'

    import {
        dataTableEntries,
        headings,
        listWithGroups,
        listWithStates,
        pages,
        speedDialItems,
        tabItems,
        themes
    } from '@data'

    let progress = $state(33)
    let checkbox = $state(false)
    let radio = $state('')
    let toggle = $state(false)
    let input = $state('')
    let inputBinding = $state('')
    let otpBinding = $state('')
    let slider = $state(50)
    let wordCount = $state(0)
    let select = $state('')
    let dataTableResults = $state(dataTableEntries.length)
</script>

<!-- eslint-disable max-lines -->
<div class="playground grid md-2 lg-3">
    <Card title="Accordion">
        <Accordion items={[{
            title: 'Do you offer support?',
            content: 'We provide 30 days of support.'
        }, {
            title: 'Can I request customizations?',
            content: 'Yes!'
        }]} />
    </Card>

    <Card title="Badge">
        <Badge onClick={() => toast('#badgeToast')}>Click me</Badge>
    </Card>

    <Card title="Button">
        <Button onClick={() => toast('#buttonToast')} theme="alert">
            Click me
        </Button>
    </Card>

    <Card title="Banner">
        <Banner closeable={true} top={50}>
            Close me
        </Banner>
    </Card>

    <Card title="Carousel">
        <Carousel
            items={3}
            subText={'Slide {0} of {1}'}
            progress={true}
            pagination={{ type: 'dots' }}
            effect="opacity"
            onScroll={page => {
                // eslint-disable-next-line no-console
                console.log(`scrolled to ${page}`)
            }}
        >
            <li data-active="true"><Box fullWidth={true}>1</Box></li>
            <li><Box fullWidth={true}>2</Box></li>
            <li><Box fullWidth={true}>3</Box></li>
        </Carousel>
    </Card>

    <Card title="Checkbox">
        <Checkbox
            label="Accept"
            onClick={e => checkbox = e.currentTarget.checked}
        />

        <span class={styles.span}>{checkbox}</span>
    </Card>

    <Card title="Collapsible">
        <Collapsible maxHeight="50px">
            <span>This paragraph can be toggled on and off.</span>
            {#snippet on()}
                <Button >Show</Button>
            {/snippet}
            {#snippet off()}
                <Button >Hide</Button>
            {/snippet}
        </Collapsible>
    </Card>

    <Card title="Copy">
        <Copy>Click to copy text</Copy>
    </Card>

    <Card title="DataTable">
        <DataTable
            headings={headings}
            data={dataTableEntries}
            filterPlaceholder="Search users"
            showFilterIcon={true}
            noResultsLabel="We found no users..."
            columnToggleLabel="Hide Columns"
            subText={`Showing ${dataTableResults} total entries`}
            itemsPerPage={5}
            pagination={{ showChevrons: false }}
            onFilter={event => {
                // eslint-disable-next-line no-console
                console.log(event)

                dataTableResults = event.numberOfResults
            }}
        />
    </Card>

    <Card title="Input">
        <Input
            bind:value={inputBinding}
            label="Enter a value"
            placeholder="Or change the color below"
            onKeyUp={e => input = e.currentTarget.value}
        />

        <Input
            type="color"
            onChange={e => input = e.currentTarget.value}
        />

        <p>Binding: {inputBinding}</p>

        <span class={styles.span}>{input}</span>
    </Card>

    <Card title="List">
        <List
            itemGroups={listWithStates}
            showSearchBar={true}
            showSearchBarIcon={true}
            searchBarPlaceholder="Search the app..."
            noResultsLabel="Nothing found..."
            onSelect={event => {
                // eslint-disable-next-line no-console
                console.log(event)
            }}
        />
    </Card>

    <Card title="OTP Input" bodyClassName="flex column">
        <OTPInput bind:value={otpBinding} />
        <OTPInput bind:value={otpBinding} groupLength={2} />

        <p>Binding: {otpBinding}</p>
    </Card>

    <Card>
        <Pagination
            pages={pages}
            showChevrons={true}
            onChange={event => {
                // eslint-disable-next-line no-console
                console.log(event)
            }}
        />
    </Card>

    <Card title="Progress">
        <Progress value={progress} />

        <div class="flex xs my wrap">
            <Button onClick={() => progress = 0}>0%</Button>
            <Button onClick={() => progress = 25}>25%</Button>
            <Button onClick={() => progress = 50}>50%</Button>
            <Button onClick={() => progress = 75}>75%</Button>
            <Button onClick={() => progress = 100}>100%</Button>
        </div>
    </Card>

    <Card title="Radio">
        <Radio
            items={[
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' }
            ]}
            name="radio"
            onChange={e => radio = e.currentTarget.value}
        />

        <span class={styles.span}>{radio}</span>
    </Card>

    <Card title="Select">
        <Select
            name="select"
            itemGroups={listWithGroups}
            showSearchBar={true}
            showSearchBarIcon={true}
            searchBarPlaceholder="Filter options"
            className={styles.mt}
            onChange={event => select = `${event.name} (${event.value})`}
            onClose={event => {
                // eslint-disable-next-line no-console
                console.log('Select closed', event)
            }}
        />

        <span class={styles.span}>Selected: {select}</span>
    </Card>

    <Card title="Slider">
        <Slider
            min={0}
            max={100}
            value={slider}
            onChange={e => slider = Number(e.currentTarget.value)}
            className={styles.mt}
        />
        <span class={styles.span}>{slider}</span>
    </Card>

    <Card title="SpeedDial">
        <SpeedDial
            items={speedDialItems}
            triggerOnClick={true}
            className={styles.dial}
        />
    </Card>

    <Card title="Spoiler">
        <Spoiler>This text will be revealed upon click</Spoiler>
    </Card>

    <Card title="Switch">
        <Switch
            onClick={e => toggle = e.currentTarget.checked}
        />

        <span class={styles.span}>{toggle}</span>
    </Card>

    <Card title="Tabs">
        <Tabs items={tabItems}>
            <div data-tab="intro" data-active="true">Intro tab</div>
            <div data-tab="setup">Setup tab</div>
            <div data-tab="conclusion">Conclusion tab</div>
        </Tabs>
    </Card>

    <Card title="Tabs - boxed">
        <Tabs items={tabItems} theme="boxed" even={true}>
            <div data-tab="intro" data-active="true">Intro tab</div>
            <div data-tab="setup">Setup tab</div>
            <div data-tab="conclusion">Conclusion tab</div>
        </Tabs>
    </Card>

    <Card title="Textarea">
        <Textarea
            placeholder="Type here to see the word count updated"
            onKeyUp={e => {
                wordCount = e.target.value
                    ? e.target.value.trim().split(/\s+/).length
                    : 0
            }}
        />
        <span class="muted">{wordCount} words</span>
    </Card>

    <Card title="ThemeSwitcher">
        <ThemeSwitcher themes={themes} />
    </Card>

    <Card title="ThemeSwitcher - toggle with icons">
        <ThemeSwitcher themes={themes} toggle={true}>
            {#snippet primaryIcon()}
                <Icon type="moon" />
            {/snippet}
            {#snippet secondaryIcon()}
                <Icon type="sun" />
            {/snippet}
        </ThemeSwitcher>
    </Card>
</div>

<Toast title="Badge toast" id="badgeToast">
    👋 Clicked on badge toast
</Toast>

<Toast title="Button toast" id="buttonToast" theme="alert">
    👋 Clicked on button toast
</Toast>
