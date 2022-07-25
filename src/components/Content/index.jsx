import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './styles.css'
import { CardsWrapperComponent, TableBug, CustomPopup } from 'components'
import { HelperDate, DateTime } from 'helpers/date'

import BugsServices from 'api/bugs'
import UsersServices from 'api/users'
import ProjectsServices from 'api/projects'

import { Cards } from 'constants/data/cards'

const ContentComponent = () => {
  const location = useLocation()
  const path = location.pathname

  const [complementaryData, setComplementaryData] = useState({ projects: [], users: [], bugs: [] })
  const [cards, setCards] = useState([])

  const TableToReturn = () => {
    return ['/bugs', '/'].includes(path) ? (
      <TableBug complementaryData={complementaryData} refreshAllData={getAllData} />
    ) : null
  }

  //efecto para cargar todos los proyectos y usuarios
  useEffect(() => {
    getAllData()
    DataForBugCard()
  }, [])

  const getAllData = async () => {
    try {
      const projects = await ProjectsServices.GetAllProjects()
      const users = await UsersServices.GetAllUsers()
      const bugs = await BugsServices.GetAllBugs()

      const bugCard = DataForBugCard(bugs)
      const userCard = DataForUserCard(users, bugs)

      const myCards = [bugCard, userCard]

      setComplementaryData({ projects, users, bugs })
      setCards(myCards)
    } catch (error) {
      CustomPopup('error', error)
    }
  }

  const DataForBugCard = (bugs) => {
    if (!bugs) return

    //buscar la tarjeta
    const bugCard = Cards.find((card) => card.title === 'Bugs')
    if (!bugCard) return

    //buscar la fecha de hoy y la de 7 dias antes
    const now = HelperDate.getNow()
    const sevenDayPassDateFromDate = HelperDate.getSevenDayPassDateFromDate(now)

    //buscar todos los bugs desde hace 7 dias
    const bugsFromSevenDayPassDate = bugs.filter((bug) => {
      const bugCreation = HelperDate.getDateTimeFromISO(bug.creacionBug)
      return bugCreation > sevenDayPassDateFromDate
    })

    //almacenar en un hash key: fecha, value: cantidad de bugs por dia
    const hashOfBugs = []
    bugsFromSevenDayPassDate.forEach((bug) => {
      const bugCreation = HelperDate.getDateTimeFromISO(bug.creacionBug).toLocaleString(DateTime.DATE_SHORT)
      if (hashOfBugs[bugCreation]) hashOfBugs[bugCreation] += 1
      else hashOfBugs[bugCreation] = 1
    })

    for (const key in hashOfBugs) {
      const element = hashOfBugs[key]
      bugCard.categories.push(key)
      bugCard.series[0].data.push(element)
    }

    bugCard.barValue = (bugsFromSevenDayPassDate.length * 100) / bugs.length || 0
    bugCard.value = `${bugsFromSevenDayPassDate.length} / ${bugs.length}` || ''

    return bugCard
  }

  const DataForUserCard = (users, bugs) => {
    if (!bugs || !users) return

    //buscar la tarjeta
    const userCard = Cards.find((card) => card.title === 'Users')
    if (!userCard) return

    //buscar la fecha de hoy y la de 7 dias antes
    const now = HelperDate.getNow()
    const sevenDayPassDateFromDate = HelperDate.getSevenDayPassDateFromDate(now)

    //buscar todos los bugs desde hace 7 dias
    const bugsFromSevenDayPassDate = bugs.filter((bug) => {
      const bugCreation = HelperDate.getDateTimeFromISO(bug.creacionBug)
      return bugCreation > sevenDayPassDateFromDate
    })

    //almacenar en un hash key: usuarioId, value: cantidad de bugs por dia
    const hashArray = []
    //cantidad de bugs asignados a cada usuario
    bugsFromSevenDayPassDate.forEach((bug) => {
      if (hashArray[bug.usuarioId]) hashArray[bug.usuarioId] += 1
      else hashArray[bug.usuarioId] = 1
    })

    for (const key in hashArray) {
      const element = hashArray[key]
      userCard.categories.push(key)
      userCard.series[0].data.push(element)
    }

    userCard.barValue = (bugsFromSevenDayPassDate.length * 100) / bugs.length || 0
    userCard.value = `${bugsFromSevenDayPassDate.length} / ${bugs.length}` || ''

    return userCard
  }

  //aqui se debe de cargar los datos a enviar en las tarjetas
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
      <CardsWrapperComponent cards={cards} />
      {TableToReturn()}
    </div>
  )
}

export default ContentComponent
