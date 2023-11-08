import { TopSearched } from '../components/TopSearched'

export default function Home() {
  return (
    <div className="mx-auto flex h-[calc(100vh-82px)] w-full max-w-7xl flex-col items-center gap-32 pt-20">
      <div className="mx-auto flex flex-col items-center gap-8">
        <label htmlFor="search" className="max-w-[30ch] text-center text-3xl">
          Digite um ingrediente ou uma lista separados por vírgula
        </label>
        <div className="border-collapse shadow-xl">
          <input
            id="search"
            type="text"
            placeholder="Ex.: água, farinha de trigo, sal, açúcar"
            className="w-[400px] border-collapse rounded-l-sm border border-r-0 border-neutral-400 px-2 py-1"
          />
          <button className="border-collapse rounded-r-sm border border-neutral-400 px-2 py-1">
            Buscar
          </button>
        </div>
      </div>
      <TopSearched />
    </div>
  )
}
