import React, { useState } from 'react'

import Card from '@components/Card/Card.tsx'

import Accordion from '@components/Accordion/Accordion.tsx'
import Badge from '@components/Badge/Badge.tsx'
import Button from '@components/Button/Button.tsx'
import Checkbox from '@components/Checkbox/Checkbox.tsx'
import Icon from '@components/Icon/Icon.tsx'
import Input from '@components/Input/Input.tsx'
import Progress from '@components/Progress/Progress.tsx'
import Radio from '@components/Radio/Radio.tsx'
import Slider from '@components/Slider/Slider.tsx'
import Switch from '@components/Switch/Switch.tsx'
import Tabs from '@components/Tabs/Tabs.tsx'
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher.tsx'
import Toast from '@components/Toast/Toast.tsx'

import { tabItems, themes } from '@data'
import { toast } from '@utils/toast'

import styles from './playground.module.scss'

const ReactPlayground = () => {
    const [progress, setProgress] = useState(33)
    const [checkbox, setCheckbox] = useState(false)
    const [radio, setRadio] = useState('')
    const [toggle, setToggle] = useState(false)
    const [input, setInput] = useState('')
    const [slider, setSlider] = useState(50)

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

            <Card title="Checkbox">
                <Checkbox
                    label="Accept"
                    onClick={e => setCheckbox(e.target.checked)}
                />

                <span className={styles.span}>{`${checkbox}`}</span>
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

            <Card title="Switch">
                <Switch
                    onClick={e => setToggle(e.target.checked)}
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

            <Card title="Slider">
                <Slider
                    min={0}
                    max={100}
                    value={slider}
                    onChange={e => setSlider(e.target.value)}
                    className={styles.mt}
                />
                <span className={styles.span}>{slider}</span>
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
