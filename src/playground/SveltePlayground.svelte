<script>
    import Card from '@components/Card/Card.svelte'

    import Accordion from '@components/Accordion/Accordion.svelte'
    import Badge from '@components/Badge/Badge.svelte'
    import Button from '@components/Button/Button.svelte'
    import Checkbox from '@components/Checkbox/Checkbox.svelte'
    import Radio from '@components/Radio/Radio.svelte'
    import Switch from '@components/Switch/Switch.svelte'
</script>

<div class="grid md-2 lg-3">
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
        <Badge onClick={() => console.log('👋')}>Click me</Badge>
    </Card>

    <Card title="Button">
        <Button onClick={() => console.log('👋')} theme="alert">
            Click me
        </Button>
    </Card>

    <Card title="Checkbox">
        <Checkbox
            label="Accept"
            onClick={e => console.log(`checked: ${e.target.checked}`)}
        />
    </Card>

    <Card title="Radio">
        <Radio
            items={[
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' }
            ]}
            name="radio"
            onChange={e => console.log('changed to:', e.target.value)}
        />
    </Card>

    <Card title="Switch">
        <Switch
            onClick={e => console.log(`switched: ${e.target.checked}`)}
        />
    </Card>
</div>
