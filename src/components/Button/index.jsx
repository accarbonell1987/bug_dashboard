import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonComponent = ({ floated, hasIcon, isPrimary, iconName, label }) => {
  return (
    <Button floated={floated} icon={hasIcon} labelPosition="left" primary={isPrimary} size="small">
      <Icon name={iconName} />
      {label}
    </Button>
  )
}

export default ButtonComponent
