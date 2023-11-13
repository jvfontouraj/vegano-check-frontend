import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export function Header() {
  const { logged, pageLoad, handleLogout, user } = useContext(UserContext)

  useEffect(() => {
    console.log(logged)
    pageLoad()
  }, [])

  const savedSearchs = 5

  return (
    <header className="flex items-center justify-between px-10 py-5">
      <Link to="/">
        <h1 className="text-xl font-semibold">🥬 Vegano Check BR</h1>
      </Link>
      {logged && <span>Olá {user.userName}!</span>}
      <div className="flex items-center gap-20">
        {logged ? (
          <Link to={'/favoritos/' + user.userId}>{savedSearchs} Favoritos</Link>
        ) : (
          <span className="cursor-default text-neutral-500 line-through">
            Favoritos
          </span>
        )}
        {logged ? (
          <button
            onClick={handleLogout}
            className="rounded-md border border-neutral-500 bg-neutral-700 px-4 py-2  text-neutral-50 shadow-lg "
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="rounded-md border border-neutral-500 bg-neutral-700 px-4 py-2  text-neutral-50 shadow-lg "
          >
            Login
          </Link>
        )}
      </div>
    </header>
  )
}
