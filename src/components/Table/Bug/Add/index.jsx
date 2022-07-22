import React, { useState } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { ModalComponent } from 'components'

const AddBugComponent = (prop) => {
  const { refreshListEvent, bugsData } = prop

  //control de los estados del formulario
  const [fieldsData, setFieldsData] = useState({
    project: { value: '', error: false },
    user: { value: '', error: false },
    description: { value: '', error: false },
  })

  //extraer los proyectos y usuarios
  const data = { projects: [], users: [] }
  bugsData.forEach((bug) => {
    if (!data.projects[bug.proyectoId])
      data.projects[bug.proyectoId] = {
        key: bug.proyectoId,
        text: bug.proyecto.nombreProyecto,
        value: bug.proyecto.nombreProyecto,
      }
    if (!data.users[bug.usuarioId])
      data.users[bug.usuarioId] = {
        key: bug.usuarioId,
        text: bug.usuario.nombreYApellidos,
        value: bug.usuario.nombreYApellidos,
      }
  })

  const handleChange = (e, { name, value }) => {
    setFieldsData({ ...fieldsData, [name]: { value, error: false } })
  }

  const handleSubmit = () => {
    refreshListEvent()
  }

  const form = (
    <Form onSubmit={handleSubmit}>
      <Form.Select
        required
        name={'project'}
        // icon="js"
        // iconPosition="left"
        label="Projects:"
        placeholder="Select Project"
        options={data.projects}
        error={fieldsData.project.error}
        onChange={(e, { value }) => handleChange(e, { name: 'project', value })}
        fluid
        selection
        clearable
      />
      <Form.Select
        required
        name={'user'}
        // icon="user"
        // iconPosition="left"
        label="Users:"
        placeholder="Select User"
        options={data.users}
        error={fieldsData.user.error}
        onChange={(e, { value }) => handleChange(e, { name: 'user', value })}
        fluid
        selection
        clearable
      />
      <Form.Field
        name={'description'}
        id="form-textarea-control-opinion"
        control={TextArea}
        label="Description"
        placeholder="Bug Description"
        error={fieldsData.description.error}
        onChange={(e, { value }) => handleChange(e, { name: 'description', value })}
      />
    </Form>
  )

  return (
    <ModalComponent
      title={'Add Bug'}
      triggerButtonProps={{ iconName: 'plus', label: 'Add Bugs' }}
      form={form}
      handleOK={handleSubmit}
    />
  )
}

export default AddBugComponent
