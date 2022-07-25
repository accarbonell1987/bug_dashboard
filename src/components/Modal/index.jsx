import React, { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

const ModalComponent = (props) => {
  const { title, triggerButtonProps, form, handleOK, handleClose, activateOK } = props
  const { iconName, label } = triggerButtonProps

  const [open, setOpen] = useState(false)

  const handleOKEvent = () => {
    handleOK()
    setOpen(false)
  }

  const handleCloseEvent = () => {
    handleClose()
    setOpen(false)
  }

  return (
    <Modal
      closeIcon
      onClose={() => handleCloseEvent()}
      onOpen={() => setOpen(true)}
      closeOnEscape={false}
      closeOnDimmerClick={false}
      open={open}
      dimmer={'blurring'}
      trigger={
        <Button floated={'left'} labelPosition="left" size="small" icon={true} primary={true}>
          <Icon name={iconName} />
          {label}
        </Button>
      }
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{form}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => handleCloseEvent()}>Cancel</Button>
        <Button onClick={() => handleOKEvent()} positive disabled={!activateOK}>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalComponent
