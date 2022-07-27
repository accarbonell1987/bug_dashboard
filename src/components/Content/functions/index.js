import { HelperDate, DateTime } from 'helpers/date'
import { Cards } from 'constants/data/cards'

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

  bugCard.categories = []
  bugCard.series[0].data = []

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
  const usersWithBugsSevenDayPass = users.map((user) => {
    const bugsByUser = user.bugs.filter((bug) => {
      const bugCreation = HelperDate.getDateTimeFromISO(bug.creacionBug)
      return bugCreation > sevenDayPassDateFromDate
    })
    return { ...user, bugs: bugsByUser }
  })

  //almacenar en un hash key: usuarioId, value: cantidad de bugs por dia
  const hashArray = []
  //cantidad de bugs asignados a cada usuario
  usersWithBugsSevenDayPass.forEach((user) => {
    hashArray[user.id] = user.bugs.length
  })

  userCard.categories = usersWithBugsSevenDayPass.map((user) => user.nombreYApellidos)
  userCard.labels = userCard.categories
  userCard.series[0].data = usersWithBugsSevenDayPass.map((user) => user.bugs.length)

  userCard.barValue = (usersWithBugsSevenDayPass.length * 100) / users.length || 0
  userCard.value = `${usersWithBugsSevenDayPass.length} / ${users.length}` || ''

  return userCard
}

const DataForProjectCard = (projects, bugs) => {
  if (!bugs || !projects) return

  //buscar la tarjeta
  const userCard = Cards.find((card) => card.title === 'Projects')
  if (!userCard) return

  //buscar la fecha de hoy y la de 7 dias antes
  const now = HelperDate.getNow()
  const sevenDayPassDateFromDate = HelperDate.getSevenDayPassDateFromDate(now)

  //buscar todos los bugs desde hace 7 dias
  const projectsWithBugsSevenDayPass = projects.map((project) => {
    const bugsByProject = project.bugs.filter((bug) => {
      const bugCreation = HelperDate.getDateTimeFromISO(bug.creacionBug)
      return bugCreation > sevenDayPassDateFromDate
    })
    return { ...project, bugs: bugsByProject }
  })

  //almacenar en un hash key: usuarioId, value: cantidad de bugs por dia
  const hashArray = []
  //cantidad de bugs asignados a cada usuario
  projectsWithBugsSevenDayPass.forEach((project) => {
    hashArray[project.id] = project.bugs.length
  })

  userCard.categories = projectsWithBugsSevenDayPass.map((project) => project.nombreProyecto)
  userCard.labels = userCard.categories
  userCard.series[0].data = projectsWithBugsSevenDayPass.map((project) => project.bugs.length)

  userCard.barValue = (projectsWithBugsSevenDayPass.length * 100) / projects.length || 0
  userCard.value = `${projectsWithBugsSevenDayPass.length} / ${projects.length}` || ''

  return userCard
}

export { DataForBugCard, DataForUserCard, DataForProjectCard }
