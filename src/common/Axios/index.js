const axios = require('axios')
const url = `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/api`

const Axios = () => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      // Authorization: `Bearer ${authToken}`,
    },
  })

  instance.defaults.headers.common['Content-Type'] = 'application/json'

  return instance
}

export default Axios
