import React from 'react'

import { SidebarComponent, ContentComponent } from 'components'

import './styles.css'

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="ComponentsGrids">
        <div>
          <SidebarComponent />
        </div>
        <div>
          <ContentComponent />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default LandingPage
