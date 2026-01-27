<script>
    import { onMount } from 'svelte'
    import { closeModal, modal } from 'webcoreui'
    import {
        Alert,
        Icon,
        Modal
    } from 'webcoreui/svelte'

    import Button from '@blocks/Button/Button.astro'

    import styles from './deployments.module.scss'

    let modalInstance

    onMount(() => {
        modalInstance = modal('.modal')
    })

    const connect = () => modalInstance.open()
    const close = () => closeModal('.modal')
</script>

<Alert title="Deployments">
    {#snippet icon()}
        <Icon type="github" />
    {/snippet}
    <span>Connect your project to GitHub to start running automatic deployments.</span>
    <br />
    <Button className={styles.connect} onClick={connect} text="Connect" />
</Alert>

<Modal title="Are you sure?" subTitle="Confirm update" className="modal">
    <p>Automatic deployments will be enabled for your project.</p>
    <Button className="close-modal" onClick={close} text="Confirm" />
    <Button theme="secondary" className="close-modal" onClick={close} text="Cancel" />
</Modal>
