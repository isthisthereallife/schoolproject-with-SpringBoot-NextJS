import { ActiveUserContext } from '../../components/context/ActiveUserProvider'
import { useContext } from 'react'

export default function useActiveUser() {
  const activeUser = useContext(ActiveUserContext)
  return activeUser
}
