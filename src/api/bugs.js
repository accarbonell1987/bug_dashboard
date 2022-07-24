import { Axios } from 'common'

const BugsServices = {
  GetAllBugs: async () => {
    const endpoint = 'bugs/all'
    const { data } = await Axios().get(endpoint)

    return data
  },
  AddBug: async (bug) => {
    const endpoint = 'bug'
    const { data } = await Axios().post(endpoint, bug)
    return data
  },
}

export default BugsServices
