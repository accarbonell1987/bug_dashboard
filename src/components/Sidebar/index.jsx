import React from 'react'
import { MenuLeftVerticalComponent } from 'components'

import './styles.css'
import { verticalMenu } from 'constants/data/menu'
import { sizes } from 'constants/data/ui_defaults'

const SidebarComponent = () => {
  return (
    <div className="SidebarContainer">
      <MenuLeftVerticalComponent size={sizes.small} isVertical={true} menuItems={verticalMenu} />
    </div>
  )
}

export default SidebarComponent
