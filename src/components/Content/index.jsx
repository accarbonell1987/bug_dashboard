import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './styles.css'
import { CardsWrapperComponent, TableBug, CustomPopup } from 'components'
import { DataForBugCard, DataForUserCard, DataForProjectCard } from './functions'

import BugsServices from 'api/bugs'
import UsersServices from 'api/users'
import ProjectsServices from 'api/projects'

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

  const getAllData = async () => {
    try {
      const projects = await ProjectsServices.GetAllProjects()
      const users = await UsersServices.GetAllUsers()
      const bugs = await BugsServices.GetAllBugs()

      const bugCard = DataForBugCard(bugs)
      const userCard = DataForUserCard(users, bugs)
      const projectCard = DataForProjectCard(projects, bugs)

      const myCards = [bugCard, userCard, projectCard]

      setComplementaryData({ projects, users, bugs })
      setCards(myCards)
    } catch (error) {
      CustomPopup('error', error)
    }
  }

  return (
    <div className="ContentMain">
      <h1>Dashboard</h1>
      <CardsWrapperComponent cards={cards} />
      {TableToReturn()}
    </div>
  )
}

export default ContentComponent
