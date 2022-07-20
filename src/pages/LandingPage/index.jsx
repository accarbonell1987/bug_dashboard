import React from 'react'
import { MenuLeftVerticalComponent } from 'components'

import { verticalMenu } from 'constants/data/menu'
import { sizes } from 'constants/data/ui_defaults'

const LandingPage = () => {
  return <MenuLeftVerticalComponent size={sizes.small} isVertical={true} menuItems={verticalMenu} />
}

export default LandingPage
