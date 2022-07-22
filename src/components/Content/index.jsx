import React from 'react'
import { useLocation } from 'react-router-dom'

import './styles.css'
import { CardsWrapperComponent, TableBug } from 'components'

const ContentComponent = () => {
  const location = useLocation()
  const path = location.pathname

  const TableToReturn = () => {
    return ['/bugs', '/'].includes(path) ? <TableBug /> : null
  }

  return (
    <div className="ContentMain">
      <h1>Dashboard</h1>
      <CardsWrapperComponent />
      {TableToReturn()}
    </div>
  )
}

export default ContentComponent
