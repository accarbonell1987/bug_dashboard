import React, { useEffect, useState } from 'react'
import { Icon, Menu, Header, Image, Table } from 'semantic-ui-react'

import { GetRandomAvatarName } from 'helpers/avatars'
import BugServices from 'api/bugs'
import { CustomPopup } from 'components'

import '../styles.css'
import AddBugComponent from './Add'

const TableBugComponent = () => {
  const assetsPath = 'img/avatars'

  const [usePagination, setUsePagination] = useState(false)
  const [bugsData, setBugsData] = useState([])

  const getAllBugs = async () => {
    try {
      const resultados = await BugServices.GetAllBugs()
      const pag = resultados.length > 10 ? true : false

      setUsePagination(pag)
      setBugsData(resultados)
    } catch (error) {
      CustomPopup('error', error)
    }
  }

  useEffect(() => {
    getAllBugs()
  }, [])

  const TableHeader = () => {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="6">
            <AddBugComponent refreshListEvent={() => getAllBugs()} />
          </Table.HeaderCell>
        </Table.Row>
        {bugsData.length > 0 && (
          <Table.Row>
            <Table.HeaderCell>
              <h3>Project</h3>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <h3>Users</h3>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <h3>Description</h3>
            </Table.HeaderCell>
          </Table.Row>
        )}
      </Table.Header>
    )
  }

  const TableBody = () => {
    const UserHeader = (image, contentLabel, subHeaderLabel) => {
      return (
        <Header as="h4" image>
          <Image src={`${assetsPath}/${image}`} rounded size="mini" />
          <Header.Content>
            {contentLabel}
            <Header.Subheader>{subHeaderLabel}</Header.Subheader>
          </Header.Content>
        </Header>
      )
    }

    return (
      <Table.Body>
        {bugsData.map((bug, index) => {
          const userName = bug.usuario.nombreYApellidos
          const projectName = bug.proyecto.nombreProyecto
          const description = bug.descripcionBug
          const avatarName = GetRandomAvatarName()

          return (
            <Table.Row key={index}>
              <Table.Cell>{projectName}</Table.Cell>
              <Table.Cell>{UserHeader(avatarName, userName, '')}</Table.Cell>
              <Table.Cell>{description}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    )
  }

  const TableFooter = () => {
    return (
      <Table.Footer>
        {usePagination && (
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        )}
      </Table.Footer>
    )
  }

  return (
    <Table celled>
      {TableHeader()}
      {TableBody()}
      {TableFooter()}
    </Table>
  )
}

export default TableBugComponent
