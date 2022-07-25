import { Axios } from 'common'

const UsersServices = {
  GetAllUsers: async () => {
    try {
      const endpoint = 'users/all'
      const { data } = await Axios().get(endpoint)

      return data.resultados
    } catch (error) {
      throw new Error(error)
    }
  },
}

export default UsersServices
