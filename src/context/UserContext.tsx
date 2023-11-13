import { ReactNode, createContext, useState } from 'react'

interface UserProps {
  userName: string
  userId: string
}

interface UserContextType {
  logged: boolean
  setLogged: (logged: boolean) => void
  user: UserProps
  setUser: (user: UserProps) => void
  pageLoad: () => void
  handleLogout: () => void
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export const UserProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [logged, setLogged] = useState(false)

  function pageLoad() {
    const localUser = window.localStorage.getItem('user')
    const parsedUser = JSON.parse(localUser!)
    if (parsedUser !== null) {
      setUser({
        userName: parsedUser.localUserName,
        userId: parsedUser.localUserId,
      })
      setLogged(true)
    }
  }

  function handleLogout() {
    setUser({ userName: '', userId: '' })
    window.localStorage.removeItem('user')
    setLogged(false)
  }

  return (
    <UserContext.Provider
      value={{
        logged,
        setLogged,
        user,
        setUser,
        pageLoad,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
