import { Axios } from 'common'

const BugsServices = {
  GetAllBugs: async () => {
    try {
      const endpoint = 'bugs/all'
      const { data } = await Axios().get(endpoint)

      return data.resultados
    } catch (error) {
      throw new Error(error)
    }
  },
  AddBug: async (bug) => {
    try {
      const endpoint = 'bug'
      const { data } = await Axios().post(endpoint, bug)
      return data
    } catch (error) {
      throw new Error(error)
    }
  },
}

export default BugsServices
