import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import veganList from '../data/vegan.json'
import nonVeganList from '../data/non-vegan.json'
import canBeVeganList from '../data/can-be-vegan.json'
import { NotVeganCard } from '../components/cards/NotVeganCard'
import { VeganCard } from '../components/cards/VeganCard'
import { CanBeVeganCard } from '../components/cards/CanBeVeganCard'
import { UndefinedCard } from '../components/cards/UndefinedCard'

interface resultListTypes {
  name: string
  description: string
  type: string
}

export default function Home() {
  const [result, setResult] = useState<resultListTypes[]>([])
  const resultList: resultListTypes[] = []

  const formSchema = z.object({
    input: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
  })
  type IFormInputs = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    const splitedInput = data.input.split(',').map((item) => item.trim())
    const undefinedItems: string[] = []

    splitedInput.map((item) => {
      const captalizedItem = item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase(),
      )

      let found = false

      veganList.map((veganItem) => {
        if (
          item === veganItem.name ||
          item.toLowerCase() === veganItem.name ||
          captalizedItem === veganItem.name
        ) {
          resultList.push({
            name: veganItem.name,
            description: veganItem.description,
            type: 'vegan',
          })
          found = true
        }
        return veganItem
      })

      nonVeganList.map((nonVeganItem) => {
        if (
          item === nonVeganItem.name ||
          item.toLowerCase() === nonVeganItem.name ||
          captalizedItem === nonVeganItem.name
        ) {
          resultList.push({
            name: nonVeganItem.name,
            description: nonVeganItem.description,
            type: 'notVegan',
          })
          found = true
        }
        return nonVeganItem
      })

      canBeVeganList.map((canBeVeganItem) => {
        if (
          item === canBeVeganItem.name ||
          item.toLowerCase() === canBeVeganItem.name ||
          captalizedItem === canBeVeganItem.name
        ) {
          resultList.push({
            name: canBeVeganItem.name,
            description: canBeVeganItem.description,
            type: 'canBeVegan',
          })
          found = true
        }
        return canBeVeganItem
      })

      if (!found) {
        undefinedItems.push(item)
      }

      return item
    })

    if (undefinedItems.length > 0) {
      undefinedItems.map((item) => {
        resultList.push({
          name: item,
          description: '',
          type: 'undefined',
        })
        return item
      })
    }
    console.log(resultList)
    setResult(resultList)
  }

  return (
    <div className="mx-auto mb-20 flex h-auto w-full max-w-7xl flex-col items-center gap-32 pt-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col items-center gap-8"
      >
        <label htmlFor="search" className="max-w-[30ch] text-center text-3xl">
          Digite um ingrediente ou uma lista separados por vírgula
        </label>
        <div className="flex border-collapse shadow-xl">
          <input
            {...register('input')}
            id="search"
            type="text"
            placeholder="Ex.: água, farinha de trigo, sal, açúcar"
            className="w-[400px] border-collapse rounded-l-sm border border-r-0 border-neutral-400 px-2 py-1"
          />

          <button
            disabled={isSubmitting}
            type="submit"
            className="border-collapse rounded-r-sm border border-neutral-400 px-2 py-1"
          >
            Buscar
          </button>
        </div>
        {errors.input && (
          <span className="text-red-400">{errors.input.message}</span>
        )}
      </form>
      <div className="flex flex-wrap justify-center gap-10">
        {result.map((item) => {
          if (item.type === 'vegan') {
            return (
              <VeganCard
                key={item.name}
                name={item.name}
                description={item.description}
              />
            )
          }
          if (item.type === 'notVegan') {
            return (
              <NotVeganCard
                key={item.name}
                name={item.name}
                description={item.description}
              />
            )
          }
          if (item.type === 'canBeVegan') {
            return (
              <CanBeVeganCard
                key={item.name}
                name={item.name}
                description={item.description}
              />
            )
          }
          if (item.type === 'undefined') {
            return <UndefinedCard key={item.name} name={item.name} />
          }

          return null
        })}
        {/* <NotVeganCard />
        <VeganCard />
        <CanBeVeganCard />
        <UndefinedCard /> */}
      </div>
    </div>
  )
}
