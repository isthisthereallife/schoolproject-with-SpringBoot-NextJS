import { ActiveUserContext } from '../../components/context/activeUserProvider'
import { useContext } from 'react'

export default function useActiveUser() {
  const activeUser = useContext(ActiveUserContext)
  return activeUser
}
