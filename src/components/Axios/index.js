import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import { Provider } from './context'

export default function AxiosProvider({ children }) {
  const axiosAuth = useMemo(() => {
    const axios = Axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
    })

    axios.interceptors.request.use((config) => {
      return config
    })

    return axios
  }, [])

  const axios = useMemo(
    () =>
      Axios.create({
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    []
  )

  const context = { axios, axiosAuth }

  return <Provider value={context}>{children}</Provider>
}

AxiosProvider.propTypes = {
  children: PropTypes.node,
}

AxiosProvider.defaultProps = {
  children: null,
}
