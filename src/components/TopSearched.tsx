import { Badge } from './Badge'

export function TopSearched() {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center gap-5 font-medium">
      <h2 className="text-xl">Os mais buscados</h2>
      <ul className="flex w-full flex-col [&>li:last-child]:border-none">
        <li className="flex items-center justify-between gap-5 border-b border-b-neutral-400 px-4 py-3">
          <h3>Água</h3>
          <Badge
            intent={'vegan'}
            className="rounded-full border border-teal-700 bg-teal-600 px-3 py-1 text-white shadow-lg"
          >
            Vegano
          </Badge>
          <span>30 vezes</span>
        </li>
        <li className="flex items-center justify-between gap-5 border-b border-b-neutral-400 px-4 py-3">
          <h3>Carne</h3>
          <Badge intent={'notVegan'}>Não Vegano</Badge>
          <span>30 vezes</span>
        </li>
        <li className="flex items-center justify-between gap-5 border-b border-b-neutral-400 px-4 py-3">
          <h3>Água</h3>
          <Badge intent={'vegan'}>Vegano</Badge>
          <span>30 vezes</span>
        </li>
        <li className="flex items-center justify-between gap-5 border-b border-b-neutral-400 px-4 py-3">
          <h3>Água</h3>
          <Badge intent={'vegan'}>Vegano</Badge>
          <span>30 vezes</span>
        </li>
        <li className="flex items-center justify-between gap-5 border-b border-b-neutral-400 px-4 py-3">
          <h3>Água</h3>
          <Badge intent={'vegan'}>Vegano</Badge>
          <span>30 vezes</span>
        </li>
      </ul>
    </div>
  )
}
