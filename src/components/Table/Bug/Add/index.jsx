import React from 'react'
import { ModalComponent } from 'components'

const AddBugComponent = () => {
  return <ModalComponent title={'Add Bug'} triggerButtonProps={{ iconName: 'plus', label: 'Add Bugs' }} />
}

export default AddBugComponent
