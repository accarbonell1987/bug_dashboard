import { Axios } from 'common'

const BugsServices = {
  GetAllBugs: async () => {
    const endpoint = 'bugs/all'
    const { data } = await Axios.get(endpoint)

    return data
  },
  AddBug: async (bug) => {
    const { description, project, user } = bug
    const endpoint = 'bug'
    const { data } = await Axios.post(endpoint, { user, project, description })
    return data
  },
}

export default BugsServices
