import React, { useEffect, useState } from 'react'
import { Icon, Menu, Header, Image, Table } from 'semantic-ui-react'

import { ButtonComponent } from 'components'
import { GetRandomAvatarName } from 'helpers/avatars'
import BugServices from 'api/bugs'

import '../styles.css'

const TableBugComponent = () => {
  const assetsPath = 'assets/images/avatars'

  const [bugsData, setBugsData] = useState([])

  const getAllBugs = async () => {
    const { resultados } = await BugServices.GetAllBugs()
    setBugsData(resultados)
  }

  useEffect(() => {
    getAllBugs()
  }, [])

  const TableHeader = () => {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="6">
            <ButtonComponent hasIcon={true} isPrimary={true} iconName={'plus'} label="Add Bugs" />
          </Table.HeaderCell>
        </Table.Row>
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
