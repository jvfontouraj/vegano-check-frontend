interface CardTypes {
  name: string
}

export function UndefinedCard(content: CardTypes) {
  return (
    <div className="flex h-fit min-h-[240px] w-full max-w-lg rounded-md border-2 border-neutral-400 py-5 shadow-lg">
      <div className="flex w-1/2 flex-col gap-4 px-5">
        <h3 className="text-2xl font-medium uppercase">{content.name}</h3>
        <div className="w-fit rounded-md bg-neutral-400 px-2 py-1 text-sm text-white">
          Indefinido
        </div>
      </div>
      <div className="flex w-1/2 flex-col gap-2 border-l px-5">
        <h4>Descrição:</h4>
        <p className="text-sm text-neutral-500">
          Não foi possível identificar o ingrediente informado. Caso deseje que
          seja incluído em nossa base de dados, envie um e-mail para
          contato@joaojardim.dev.
        </p>
      </div>
    </div>
  )
}
