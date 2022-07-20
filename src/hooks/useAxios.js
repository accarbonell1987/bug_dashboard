import { useContext } from 'react'
import { AxiosContext } from '../components/Axios/context'

export default function useAxios() {
  return useContext(AxiosContext)
}
