import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './styles.css'
import { CardsWrapperComponent, TableBug, CustomPopup } from 'components'

import BugsServices from 'api/bugs'
import UsersServices from 'api/users'
import ProjectsServices from 'api/projects'

const ContentComponent = () => {
  const location = useLocation()
  const path = location.pathname

  const [complementaryData, setComplementaryData] = useState({ projects: [], users: [], bugs: [] })

  const TableToReturn = () => {
    return ['/bugs', '/'].includes(path) ? <TableBug complementaryData={complementaryData} /> : null
  }

  //efecto para cargar todos los proyectos y usuarios
  useEffect(() => {
    getAllData()
  }, [])

  const getAllData = async () => {
    try {
      const projects = await ProjectsServices.GetAllProjects()
      const users = await UsersServices.GetAllUsers()
      const bugs = await BugsServices.GetAllBugs()

      setComplementaryData({ projects, users, bugs })
    } catch (error) {
      CustomPopup('error', error)
    }
  }

  //aqui se debe de cargar los datos a enviar en las tarjetas

  //bugs
  /*
    total: cantidad de bugs
    series: cantidadDeBugsPorDia: [] los ultimos 7
    value: bugs en 24horas
  */

  //users
  /*
    total: cantidad de usuarios
    series: cantidad de asignaciones a usuarios por dia [] los ultimos 7
    value: asignaciones de bugs en 24hr por usuarios
  */

  //projects
  /*
    total: cantidad de proyectos
    series: cantidad de bugs por proyecto por dia [] los ultimos 7
    value: bugs asignados por proyectos en 24hr
  */

  return (
    <div className="ContentMain">
      <h1>Dashboard</h1>
      <CardsWrapperComponent />
      {TableToReturn()}
    </div>
  )
}

export default ContentComponent
