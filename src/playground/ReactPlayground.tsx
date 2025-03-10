/* eslint-disable max-lines */
import React, { useState } from 'react'

import Accordion from '@components/Accordion/Accordion.tsx'
import Badge from '@components/Badge/Badge.tsx'
import Banner from '@components/Banner/Banner.tsx'
import Button from '@components/Button/Button.tsx'
import Card from '@components/Card/Card.tsx'
import Carousel from '@components/Carousel/Carousel.tsx'
import Checkbox from '@components/Checkbox/Checkbox.tsx'
import Collapsible from '@components/Collapsible/Collapsible.tsx'
import Copy from '@components/Copy/Copy.tsx'
import DataTable from '@components/DataTable/DataTable.tsx'
import Icon from '@components/Icon/Icon.tsx'
import Input from '@components/Input/Input.tsx'
import List from '@components/List/List.tsx'
import Pagination from '@components/Pagination/Pagination.tsx'
import Progress from '@components/Progress/Progress.tsx'
import Radio from '@components/Radio/Radio.tsx'
import Select from '@components/Select/Select.tsx'
import Slider from '@components/Slider/Slider.tsx'
import SpeedDial from '@components/SpeedDial/SpeedDial.tsx'
import Spoiler from '@components/Spoiler/Spoiler.tsx'
import Switch from '@components/Switch/Switch.tsx'
import Tabs from '@components/Tabs/Tabs.tsx'
import Textarea from '@components/Textarea/Textarea.tsx'
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher.tsx'
import Toast from '@components/Toast/Toast.tsx'
import Box from '@static/Box.tsx'

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

const ReactPlayground = () => {
    const [progress, setProgress] = useState(33)
    const [checkbox, setCheckbox] = useState(false)
    const [radio, setRadio] = useState('')
    const [toggle, setToggle] = useState(false)
    const [input, setInput] = useState('')
    const [slider, setSlider] = useState(50)
    const [wordCount, setWordCount] = useState(0)
    const [select, setSelect] = useState('')
    const [dataTableResults, setDataTableResults] = useState(dataTableEntries.length)

    return (
        <div className="grid md-2 lg-3">
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
                    subText="Slide {0} of {1}"
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
                    onClick={e => setCheckbox(e.currentTarget.checked)}
                />

                <span className={styles.span}>{`${checkbox}`}</span>
            </Card>

            <Card title="Collapsible">
                <Collapsible
                    on={<Button>Show</Button>}
                    off={<Button>Hide</Button>}
                    maxHeight="50px"
                >
                    <span>This paragraph can be toggled on and off.</span>
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
                    id="react-dt"
                    onFilter={event => {
                        // eslint-disable-next-line no-console
                        console.log(event)

                        setDataTableResults(event.numberOfResults)
                    }}
                />
            </Card>

            <Card title="Input">
                <Input
                    label="Enter a value"
                    placeholder="Or change the color below"
                    onKeyUp={(e: any) => setInput(e.target.value)}
                />

                <Input
                    type="color"
                    onChange={(e: any) => setInput(e.target.value)}
                />

                <span className={styles.span}>{input}</span>
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

                <div className="flex xs my">
                    <Button onClick={() => setProgress(0)}>0%</Button>
                    <Button onClick={() => setProgress(25)}>25%</Button>
                    <Button onClick={() => setProgress(50)}>50%</Button>
                    <Button onClick={() => setProgress(75)}>75%</Button>
                    <Button onClick={() => setProgress(100)}>100%</Button>
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
                    onChange={e => setRadio(e.target.value)}
                />

                <span className={styles.span}>{radio}</span>
            </Card>

            <Card title="Select">
                <Select
                    name="select"
                    itemGroups={listWithGroups}
                    showSearchBar={true}
                    showSearchBarIcon={true}
                    searchBarPlaceholder="Filter options"
                    className={styles.mt}
                    onChange={payload => setSelect(`${payload.name} (${payload.value})`)}
                    onClose={event => {
                        // eslint-disable-next-line no-console
                        console.log('Select closed', event)
                    }}
                />

                <span className={styles.span}>Selected: {select}</span>
            </Card>

            <Card title="Slider">
                <Slider
                    min={0}
                    max={100}
                    value={slider}
                    onChange={e => setSlider(Number(e.target.value))}
                    className={styles.mt}
                />
                <span className={styles.span}>{slider}</span>
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
                    onClick={e => setToggle(e.currentTarget.checked)}
                />

                <span className={styles.span}>{`${toggle}`}</span>
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
                        setWordCount(e.target.value
                            ? e.target.value.trim().split(/\s+/).length
                            : 0
                        )
                    }}
                />
                <span className="muted">{wordCount} words</span>
            </Card>

            <Card title="ThemeSwitcher">
                <ThemeSwitcher themes={themes} />
            </Card>

            <Card title="ThemeSwitcher - toggle with icons">
                <ThemeSwitcher
                    themes={themes}
                    toggle={true}
                    primaryIcon={<Icon type="moon" />}
                    secondaryIcon={<Icon type="sun" />}
                />
            </Card>

            <Toast title="Badge toast" id="badgeToast">
                👋 Clicked on badge toast
            </Toast>

            <Toast title="Button toast" id="buttonToast" theme="alert">
                👋 Clicked on button toast
            </Toast>
        </div>
    )
}

export default ReactPlayground
