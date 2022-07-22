import React from 'react'
import { useHistory } from 'react-router-dom'
import { Divider, Header, Icon, Label } from 'semantic-ui-react'

const styles = {
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
  returnLabel: {
    cursor: 'pointer',
  },
}

const Error404 = () => {
  const navigation = useHistory()

  return (
    <div style={styles.centerContainer}>
      <Header as="h2" icon textAlign="center">
        <Icon name="plug" circular />
        <Header.Content>404</Header.Content>
        <Header.Subheader>Page Not Found, Shit...</Header.Subheader>
        <Divider />
        <Label onClick={() => navigation.push('/')} style={styles.returnLabel}>
          <h3>Return</h3>
        </Label>
      </Header>
    </div>
  )
}

export default Error404
