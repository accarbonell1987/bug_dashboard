import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonComponent = (props) => {
  const { hasIcon, isPrimary, iconName, label } = props
  return (
    <Button floated={'left'} icon={hasIcon} labelPosition="left" primary={isPrimary} size="small">
      <Icon name={iconName} />
      {label}
    </Button>
  )
}

export default ButtonComponent
