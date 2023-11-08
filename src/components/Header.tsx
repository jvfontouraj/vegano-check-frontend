import { Link } from 'react-router-dom'

export function Header() {
  const savedSearchs = 5
  const userId = '$userId'

  return (
    <header className="flex items-center justify-between px-10 py-5">
      <Link to="/">
        <h1 className="text-xl font-semibold">🥬 Vegano Check BR</h1>
      </Link>
      <div className="flex items-center gap-20">
        <Link to={'/favoritos/' + userId}>{savedSearchs} Favoritos</Link>
        <Link
          to="/login"
          className="rounded-md border border-neutral-500 bg-neutral-700 px-4 py-2  text-neutral-50 shadow-lg "
        >
          Login
        </Link>
      </div>
    </header>
  )
}
