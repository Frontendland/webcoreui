import React, { useEffect, useState } from 'react'
import { closeModal,modal } from 'webcoreui'
import {
    Alert,
    Icon,
    Modal
} from 'webcoreui/react'

import Button from '@blocks/Button/Button.astro'

import styles from './deployments.module.scss'

type ModalInstance = {
    open: () => void
    remove: () => void
} | void

const Deployments = () => {
    const [modalInstance, setModalInstance] = useState<ModalInstance>()

    useEffect(() => {
        setModalInstance(modal('.modal'))
    }, [])

    const connect = () => modalInstance?.open()
    const close = () => closeModal('.modal')

    return (
        <Alert title="Deployments" icon={<Icon type="github" />}>
            <span>Connect your project to GitHub to start running automatic deployments.</span>
            <br />
            <Button className={styles.connect} onClick={connect} text="Connect" />

            <Modal title="Are you sure?" subTitle="Confirm update" className="modal">
                <p>Automatic deployments will be enabled for your project.</p>
                <div className="flex xs">
                    <Button className="close-modal" onClick={close} text="Confirm" />
                    <Button theme="secondary" className="close-modal" onClick={close} text="Cancel" />
                </div>
            </Modal>
        </Alert>
    )
}

export default Deployments
