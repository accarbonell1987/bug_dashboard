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
  // const test = [{ key: 1, value: 'test', text: 'test' }]

  //extraer los proyectos y usuarios
  const data = { projects: [], users: [] }
  bugsData.forEach((bug) => {
    // if (!data.projects[bug.proyectoId])
    if (!data.projects.find((p) => p.key === bug.proyectoId))
      data.projects.push({
        key: bug.proyectoId,
        text: bug.proyecto.nombreProyecto,
        value: bug.proyecto.nombreProyecto,
      })
    if (!data.users.find((p) => p.key === bug.userId))
      data.users.push({
        key: bug.usuarioId,
        text: bug.usuario.nombreYApellidos,
        value: bug.usuario.nombreYApellidos,
      })
  })

  const handleChange = (e, { name, value }) => {
    setFieldsData({ ...fieldsData, [name]: { value, error: false } })
  }

  const handleSubmit = () => {
    refreshListEvent()
  }

  const form = (projects, users) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Select
          required
          name={'project'}
          // icon="js"
          // iconPosition="left"
          label="Projects:"
          placeholder="Select Project"
          options={projects || []}
          error={fieldsData.project.error}
          // onChange={(e, { value }) => handleChange(e, { name: 'project', value })}
          fluid
          clearable
        />
        <Form.Select
          required
          name={'user'}
          label="Users:"
          placeholder="Select User"
          options={users || []}
          error={fieldsData.user.error}
          // onChange={(e, { value }) => handleChange(e, { name: 'user', value })}
          fluid
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
  }

  return (
    <ModalComponent
      title={'Add Bug'}
      triggerButtonProps={{ iconName: 'plus', label: 'Add Bugs' }}
      form={form(data.projects, data.users)}
      handleOK={handleSubmit}
    />
  )
}

export default AddBugComponent
