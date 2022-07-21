import React from 'react'
import { Icon, Label, Menu, Header, Image, Table } from 'semantic-ui-react'

import { ButtonComponent } from 'components'

const TableBugComponent = () => {
  const TableHeader = () => {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="6">
            <ButtonComponent floated={true} hasIcon={true} isPrimary={true} iconName={'plus'} label="Add Bugs" />
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    )
  }

  const TableBody = () => {
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>First</Label>
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image src={'assets/images/avatars/daniel.jpg'} rounded size="mini" />
              <Header.Content>
                Daniel
                <Header.Subheader>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" image>
              <Image src="assets/images/avatars/jenny.jpg" rounded size="mini" />
              <Header.Content>
                Jenny
                <Header.Subheader>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" image>
              <Image src="assets/images/avatars/steve.jpg" rounded size="mini" />
              <Header.Content>
                Steve
                <Header.Subheader>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
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
