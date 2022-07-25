import React, { useState, useRef, useEffect } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { ModalComponent, CustomPopup } from 'components'
import BugsServices from 'api/bugs'

const AddBugComponent = (prop) => {
  const submitButtonReference = useRef()

  const { refreshListEvent, projects, users } = prop

  const selectProjects = projects.map((p) => {
    return { key: p.id, value: p.id, text: p.nombreProyecto }
  })
  const selectUsers = users.map((p) => {
    return { key: p.id, value: p.id, text: p.nombreYApellidos }
  })

  const defaultFieldsData = {
    project: { value: '', error: true },
    user: { value: '', error: true },
    description: { value: '', error: true },
  }

  //control de los estados del formulario
  const [fieldsData, setFieldsData] = useState(defaultFieldsData)
  const [activateOKButton, setActivateOKButton] = useState(false)

  //efecto para la activación del botón OK
  useEffect(() => {
    const validateOkButton = () => {
      let activateButton = !fieldsData.project.error && !fieldsData.user.error && !fieldsData.description.error
      setActivateOKButton(activateButton)
    }
    validateOkButton()
  }, [fieldsData])

  const handleChange = (e, { name, value }) => {
    setFieldsData({ ...fieldsData, [name]: { value, error: value === '' } })
  }

  const handleSubmit = async () => {
    const bug = {
      project: fieldsData.project.value,
      user: fieldsData.user.value,
      description: fieldsData.description.value,
    }
    try {
      await BugsServices.AddBug(bug)
      refreshListEvent()
    } catch (error) {
      CustomPopup('error', error)
    } finally {
      cleanInputs()
    }
  }

  const cleanInputs = () => setFieldsData(defaultFieldsData)

  const form = (projects, users) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Select
          required
          name={'project'}
          label="Projects:"
          placeholder="Select Project"
          options={projects || []}
          error={fieldsData.project.error}
          onChange={(e, { value }) => handleChange(e, { name: 'project', value })}
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
          onChange={(e, { value }) => handleChange(e, { name: 'user', value })}
          fluid
          clearable
        />
        <Form.Field
          required
          name={'description'}
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Description"
          placeholder="Bug Description"
          error={fieldsData.description.error}
          onChange={(e, { value }) => handleChange(e, { name: 'description', value })}
        />
        <input type={'submit'} ref={submitButtonReference} hidden />
      </Form>
    )
  }

  return (
    <ModalComponent
      title={'Add Bug'}
      triggerButtonProps={{ iconName: 'plus', label: 'Add Bugs' }}
      form={form(selectProjects, selectUsers)}
      handleOK={handleSubmit}
      handleClose={cleanInputs}
      activateOK={activateOKButton}
    />
  )
}

export default AddBugComponent
