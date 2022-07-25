import React, { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

const ModalComponent = (props) => {
  const { title, triggerButtonProps, form, handleOK, activateOK } = props
  const { iconName, label } = triggerButtonProps

  const [open, setOpen] = useState(false)

  const handleOKEvent = () => {
    handleOK()
    setOpen(false)
  }

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
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
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => handleOKEvent()} positive disabled={!activateOK}>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalComponent
