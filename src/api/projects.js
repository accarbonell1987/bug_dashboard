import { Axios } from 'common'

const ProjectsServices = {
  GetAllProjects: async () => {
    try {
      const endpoint = 'projects/all'
      const { data } = await Axios().get(endpoint)

      return data.resultados
    } catch (error) {
      throw new Error(error)
    }
  },
}

export default ProjectsServices
