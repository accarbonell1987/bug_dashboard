import React from 'react'

import './styles.css'
import { CardsWrapperComponent, TableBug } from 'components'

const ContentComponent = () => {
  return (
    <div className="ContentMain">
      <h1>Dashboard</h1>
      <CardsWrapperComponent />
      <TableBug />
    </div>
  )
}

export default ContentComponent
