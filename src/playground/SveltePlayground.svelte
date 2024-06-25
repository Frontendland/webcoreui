<script>
    import Card from '@components/Card/Card.svelte'

    import Accordion from '@components/Accordion/Accordion.svelte'
    import Badge from '@components/Badge/Badge.svelte'
    import Button from '@components/Button/Button.svelte'
    import Checkbox from '@components/Checkbox/Checkbox.svelte'
    import Input from '@components/Input/Input.svelte'
    import Progress from '@components/Progress/Progress.svelte'
    import Radio from '@components/Radio/Radio.svelte'
    import Switch from '@components/Switch/Switch.svelte'
    import Tabs from '@components/Tabs/Tabs.svelte'
    import Toast from '@components/Toast/Toast.svelte'

    import { tabItems } from '@data'
    import { toast } from '@utils/toast'
    
    import styles from './playground.module.scss'

    let progress = 33
    let checkbox = false
    let radio = ''
    let toggle = false
    let input = ''
</script>

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

    <Card title="Checkbox">
        <Checkbox
            label="Accept"
            onClick={e => checkbox = e.target.checked}
        />

        <span class={styles.span}>{checkbox}</span>
    </Card>

    <Card title="Input">
        <Input
            label="Enter a value"
            placeholder="Or change the color below"
            onKeyUp={e => input = e.target.value}
        />

        <Input
            type="color"
            onChange={e => input = e.target.value}
        />

        <span class={styles.span}>{input}</span>
    </Card>

    <Card title="Progress">
        <Progress value={progress} />

        <div class="flex xs my">
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
            onChange={e => radio =  e.target.value}
        />

        <span class={styles.span}>{radio}</span>
    </Card>

    <Card title="Switch">
        <Switch
            onClick={e => toggle = e.target.checked}
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
</div>

<Toast title="Badge toast" id="badgeToast">
    👋 Clicked on badge toast
</Toast>

<Toast title="Button toast" id="buttonToast" theme="alert">
    👋 Clicked on button toast
</Toast>
