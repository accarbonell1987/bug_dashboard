import React from 'react'
import { MenuLeftVerticalComponent } from 'components'

import './style.css'
import { verticalMenu } from 'constants/data/menu'
import { sizes } from 'constants/data/ui_defaults'

const SidebarComponent = () => {
  return (
    <>
      <MenuLeftVerticalComponent size={sizes.small} isVertical={true} menuItems={verticalMenu} />
    </>
  )
}

export default SidebarComponent
