<script>
    import { onMount } from 'svelte'
    import { closeModal,modal } from 'webcoreui'
    import {
        Alert,
        Button,
        Icon,
        Modal
    } from 'webcoreui/svelte'

    import styles from './deployments.module.scss'

    let modalInstance

    onMount(() => {
        modalInstance = modal('.modal')
    })

    const connect = () => modalInstance.open()
    const close = () => closeModal('.modal')
</script>

<Alert title="Deployments">
    <Icon type="github" slot="icon" />
    <span>Connect your project to GitHub to start running automatic deployments.</span>
    <br />
    <Button className={styles.connect} onClick={connect}>Connect</Button>
</Alert>

<Modal title="Are you sure?" subTitle="Confirm update" className="modal">
    <p>Automatic deployments will be enabled for your project.</p>
    <Button className="close-modal" onClick={close}>Confirm</Button>
    <Button theme="secondary" className="close-modal" onClick={close}>Cancel</Button>
</Modal>
